import { Dispatch } from "react";
import { Post, getPosts, getPost } from "../../api/posts";

/* Action Types */
const GET_POSTS = 'posts/GET_POSTS' as const;
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS' as const;
const GET_POSTS_FAILURE = 'posts/GET_POSTS_FAILURE' as const;

const GET_POST = 'posts/GET_POST' as const;
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS' as const;
const GET_POST_FAILURE = 'posts/GET_POST_FAILURE' as const;

/* Action Creators */
const getPostsAction = () => ({ type: GET_POSTS })
const getPostsSuccessAction = (payload: Post[]) => (
    { type: GET_POSTS_SUCCESS, payload }
) 
const getPostsFailureAction = (payload: Error) => (
    { type: GET_POSTS_FAILURE, payload }
) 

const getPostAction = () => ({ type: GET_POST })
const getPostSuccessAction = (payload: Post) => (
    { type: GET_POST_SUCCESS, payload }
) 
const getPostFailureAction = (payload: Error) => (
    { type: GET_POST_FAILURE, payload }
) 

/* Thunk Functions */
export const getPostsReq = () => async (dispatch: Dispatch<PostsAction>) => {
    dispatch(getPostsAction());
    try {
        const posts = await getPosts();
        dispatch(getPostsSuccessAction(posts))
    } catch (error) {
        dispatch(getPostFailureAction(error))
    }
}

export const getPostReq = (id: number) => async (dispatch: Dispatch<PostsAction>) => {
    dispatch(getPostAction());
    try {
        const post = await getPost(id);
        dispatch(getPostSuccessAction(post))
    } catch (error) {
        dispatch(getPostFailureAction(error))
    }
}

/* ActionType */
type PostsAction = 
    | ReturnType<typeof getPostsAction> 
    | ReturnType<typeof getPostsSuccessAction> 
    | ReturnType<typeof getPostsFailureAction> 
    | ReturnType<typeof getPostAction> 
    | ReturnType<typeof getPostSuccessAction> 
    | ReturnType<typeof getPostFailureAction>


/* ************************************************** */


/* State Type */
type PostsState = {
    posts: {
        loading: boolean;
        data: Post[] | null;
        error: Error | null;
    };
    post: {
        loading: boolean;
        data: Post | null;
        error: Error | null;
    };
}

/* Initial State */
const initialState: PostsState = {
    posts: {
        loading: false,
        data: null,
        error: null,
    },
    post: {
        loading: false,
        data: null,
        error: null
    }
}

/* Reducer */
const posts = (state: PostsState = initialState, action: PostsAction) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: null
                }
            }

        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }

        case GET_POSTS_FAILURE:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }

        case GET_POST:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null,
                    error: null
                }
            }

        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }

        case GET_POST_FAILURE:
            return {
                ...state,
                post: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        
        default: 
            return {
                ...state
            }
    }
}

export default posts;