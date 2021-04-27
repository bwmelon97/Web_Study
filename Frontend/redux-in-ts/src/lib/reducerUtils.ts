import { AsyncActionCreatorBuilder } from "typesafe-actions"

export type AsyncState<T, E = any> = {
    loading:    boolean;
    data:       T | null;
    error:      E | null;
}

export const asyncState = {
    initiate: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
        loading: false,
        data: initialData ? initialData : null,
        error: null
    }),
    load: <T, E = any>(data?: T): AsyncState<T, E> => ({
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

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>

export const asyncStateHandler = <
    S,
    AC extends AnyAsyncActionCreator,
    K extends keyof S
> (asyncActionCreator: AC, key: K) => {
    const { request, success, failure } = asyncActionCreator
    type ActionType = ReturnType<typeof request> | ReturnType<typeof success> | ReturnType<typeof failure>

    return ( state: S, action: ActionType ) => {
        switch(action.type) {
            case request().type:
                return {
                    ...state,
                    [key]: asyncState.load()
                }

            case success().type: 
                return {
                    ...state,
                    [key]: asyncState.success(action.payload)
                }

            case failure().type:
                return {
                    ...state,
                    [key]: asyncState.failure(action.payload)
                }

            default: return { ...state }
        }
    }
}

export const asyncActionsToArray = ( asyncActions: AnyAsyncActionCreator ) => [
    asyncActions.request,  
    asyncActions.success,
    asyncActions.failure
]
