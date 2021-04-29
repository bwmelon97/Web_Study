import { AsyncActionCreatorBuilder, PayloadAction, PayloadMetaAction } from "typesafe-actions"

export type AsyncState<T = any, E = any> = {
    loading:    boolean;
    data:       T | null;
    error:      E | null;
}

export type AsyncStateWithCache<T = any, E = any> = {
    [id: number]: AsyncState<T, E>
}

// const isAsyncState = ( state: AsyncState | AsyncStateWithCache ): state is AsyncState => {
//     return state as AsyncState !== undefined 
// }

// const isPayloadAction = (
//     action: PayloadAction<any, any> | PayloadMetaAction<any, any, { id: number }>
// ): action is PayloadAction<any, any> => {
//     return action as PayloadAction<any, any> !== undefined
// }
export const isPayloadMetaAction = (
    action: PayloadAction<any, any> | PayloadMetaAction<any, any, { id: number }>
): action is PayloadMetaAction<any, any, { id: number }> => {
    return action as PayloadMetaAction<any, any, { id: number }> !== undefined
}

export const asyncState = {
    initiate: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
        loading: false,
        data: initialData ? initialData : null,
        error: null
    }),
    load: <T, E = any>(data?: T | null): AsyncState<T, E> => ({
        loading: true,
        data: data ? data : null,
        error: null
    }),
    success: <T, E = any>(data: T): AsyncState<T, E> => ({
        loading: false,
        data,
        error: null
    }),
    failure: <T, E>(error: E): AsyncState<T, E> => ({
        loading: false,
        data: null,
        error
    })
}

// type AC = ReturnType<typeof createAsyncAction()>


type AnyPayloadAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>
type AnyPayloadMetaAsyncActionCreator<T = {id: number}> = AsyncActionCreatorBuilder<
    [any, any, [any, T]], [ any, any, [any, T]], [ any, any, [any, T]]
>


export const asyncStateHandler = <
    S extends { [key: string]: AsyncState<any> | AsyncStateWithCache<any> },
    AC extends AnyPayloadAsyncActionCreator | AnyPayloadMetaAsyncActionCreator,
    K extends keyof S
> (asyncActionCreator: AC, key: K) => {
    const { request, success, failure } = asyncActionCreator
    type ActionType = ReturnType<typeof request> | ReturnType<typeof success> | ReturnType<typeof failure>

    console.log('hello world')

    return ( state: S, action: ActionType ) => {        
        const stateKey = state[key];
        
        console.log('hi world')
        console.log(action)

        switch(action.type) {
            case request().type: {
                if ( isPayloadMetaAction(action) ) {
                    // console.log('load1')
                    // return {
                    //     ...state,
                    //     [key]: asyncState.load( (stateKey as AsyncState).data )
                    // }
                    console.log('load2')
                    const { id } = (action as PayloadMetaAction<any, any, {id: number}>).meta   
                    return { 
                        ...state,
                        [key]: { [id]: asyncState.load( (stateKey as AsyncStateWithCache)[id]?.data ) }
                    }
                }
                else {
                    // console.log('load2')
                    // const { id } = (action as PayloadMetaAction<any, any, {id: number}>).meta   
                    // return { 
                    //     ...state,
                    //     [key]: { [id]: asyncState.load( (stateKey as AsyncStateWithCache)[id].data ) }
                    // }
                    console.log('load1')
                    return {
                        ...state,
                        [key]: asyncState.load( (stateKey as AsyncState).data )
                    }
                }
            }

            case success().type: {
                if ( isPayloadMetaAction(action) ) {
                    // console.log('hi1')
                    // return {
                    //     ...state,
                    //     [key]: asyncState.success(action.payload)
                    // }
                    console.log('hihi2')
                    const { id } = (action as PayloadMetaAction<any, any, {id: number}>).meta 
                    return { 
                        ...state,
                        [key]: { [id]: asyncState.success( (action as PayloadMetaAction<any, any, {id: number}>).payload ) }
                    }
                }
                else {
                    // console.log('hihi2')
                    // const { id } = (action as PayloadMetaAction<any, any, {id: number}>).meta 
                    // return { 
                    //     ...state,
                    //     [key]: { [id]: asyncState.success( (action as PayloadMetaAction<any, any, {id: number}>).payload ) }
                    // }
                    console.log('hi1')
                    return {
                        ...state,
                        [key]: asyncState.success(action.payload)
                    }
                }
            }

            case failure().type: {
                if ( isPayloadMetaAction(action) ) {
                    // return {
                    //     ...state,
                    //     [key]: asyncState.failure(action.payload)
                    // }
                    const { id } = (action as PayloadMetaAction<any, any, {id: number}>).meta 
                    return { 
                        ...state,
                        [key]: { [id]: asyncState.failure( (action as PayloadMetaAction<any, any, {id: number}>).payload ) }
                    }
                }
                else {
                    // const { id } = (action as PayloadMetaAction<any, any, {id: number}>).meta 
                    // return { 
                    //     ...state,
                    //     [key]: { [id]: asyncState.failure( (action as PayloadMetaAction<any, any, {id: number}>).payload ) }
                    // }
                    return {
                        ...state,
                        [key]: asyncState.failure(action.payload)
                    }
                }
            }

            default: return { ...state }
        }
    }
}

export const asyncActionsToArray = ( asyncActions: AnyPayloadAsyncActionCreator ) => [
    asyncActions.request,  
    asyncActions.success,
    asyncActions.failure
]

export const asyncActionsWithMetaToArray = <T>(asyncActions: AnyPayloadMetaAsyncActionCreator<T>) => [
    asyncActions.request,  
    asyncActions.success,
    asyncActions.failure
]
