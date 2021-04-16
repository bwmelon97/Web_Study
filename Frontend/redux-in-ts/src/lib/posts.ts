import { Dispatch } from "react";

import { Post } from "../api/posts";
import { PostsAction } from "../modules/posts";


export const createActionCreators = (type: 'posts/GET_POST' | 'posts/GET_POSTS') => {
    const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`] as const;

    return {
        get: () => ({type}),
        success: (payload: Post | Post[]) => ({type: SUCCESS, payload}),
        failure: (payload: Error) => ({type: FAILURE, payload})
    }
}

type ActionCreator = ReturnType<typeof createActionCreators>


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