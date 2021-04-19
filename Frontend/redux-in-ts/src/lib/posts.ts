import { Dispatch } from "react";

import { Post } from "../api/posts";
import { PostsAction, PostsState } from "../modules/posts";


/* Action Creator를 생성하는 코드 */
export const createActionCreators = (type: 'posts/GET_POST' | 'posts/GET_POSTS') => {
    const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`] as const;

    return {
        get: () => ({type}),
        success: (payload: Post | Post[]) => ({type: SUCCESS, payload}),
        failure: (payload: Error) => ({type: FAILURE, payload})
    }
}

type ActionCreator = ReturnType<typeof createActionCreators>


/* Posts 모듈의 Thunk 함수를 생성하는 코드 */
export const createPostsThunk = (
    dataFetch: (param?: any) => Promise<Post | Post[]>,
    actionCreator: ActionCreator
) => {
    return (param?: any) => async (dispatch: Dispatch<PostsAction>) => {
        dispatch( actionCreator.get() )
        try {
            const payload = await dataFetch(param);
            dispatch( actionCreator.success(payload) )
        } catch (error) {
            dispatch( actionCreator.failure(error) )
        }
    }
}

/* posts 모듈의 리듀서 유틸리티 */
export const reducerUtils = {
    initialize: <T>(initialData: T | null = null) => ({
        loading: false,
        data: initialData,
        error: null,
    }),
    loading: <T>(prevData: T | null = null) => ({
        loading: true,
        data: prevData,
        error: null
    }),
    success: <T>(payload: T) => ({
        loading: false,
        data: payload,
        error: null
    }),
    failure: (payload: Error) => ({
        loading: false,
        data: null,
        error: payload
    })
}

export const handleAction = (
    type: 'posts/GET_POST' | 'posts/GET_POSTS',
    key: 'post' | 'posts',
    keepData: boolean = false
) => (
    state: PostsState, action: PostsAction
) => {
    const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`] as const;

    switch (action.type) {
        case type:
            return {
                ...state,
                [key]: reducerUtils.loading( keepData ? state[key].data : null )
            }
        
        case SUCCESS:
            return {
                ...state,
                [key]: reducerUtils.success(action.payload)
            }

        case FAILURE:
            return {
                ...state,
                [key]: reducerUtils.failure(action.payload)
            }
    
        default: return { ...state }
    }
}