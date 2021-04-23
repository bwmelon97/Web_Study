import { Dispatch } from "react";
import { RootState } from ".";
import { Post, getPosts, getPost } from "../api/posts";
import { createActionCreators, createPostsThunk, reducerUtils } from "../lib/posts";

/* Action Types */
export const GET_POSTS = 'posts/GET_POSTS' as const;
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS' as const;
const GET_POSTS_FAILURE = 'posts/GET_POSTS_FAILURE' as const;

export const GET_POST = 'posts/GET_POST' as const;
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS' as const;
const GET_POST_FAILURE = 'posts/GET_POST_FAILURE' as const;

const CLEAN_POST = 'posts/CLEAN_POST' as const;

/* Action Creators */
const getPostActions = createActionCreators<typeof GET_POST>(GET_POST)
const getPostsActions = createActionCreators<typeof GET_POSTS>(GET_POSTS)

const getPostAction = ( meta: {id: number} ) => ({ type: GET_POST, meta })

const getPostSuccessAction = (
    payload: Post,
    meta: { id: number }
) => ({ type: GET_POST_SUCCESS, payload, meta })

const getPostFailureAction = ( 
    payload: Error, 
    meta: {id: number} 
) => ({ type: GET_POST_FAILURE, payload, meta })

export const clearPostAction = () => ({ type: CLEAN_POST })

/* Thunk Functions */
export const getPostReq = createPostsThunk( getPost, getPostActions );
export const getPostsReq = createPostsThunk( getPosts, getPostsActions );

export const getPostReqById = (id: number) => async ( dispatch: Dispatch<PostsAction> ) => {
    dispatch( getPostAction({id}) );
    try {
        const postData = await getPost(id);
        dispatch( getPostSuccessAction(postData, {id}) );
    } catch (error) {
        dispatch( getPostFailureAction(error, {id}) );
    }
}

/* ActionType */
export type PostsAction = 
    | ReturnType<typeof getPostsActions.get>
    | ReturnType<typeof getPostsActions.success>
    | ReturnType<typeof getPostsActions.failure>
    // | ReturnType<typeof getPostActions.get>
    // | ReturnType<typeof getPostActions.success>
    // | ReturnType<typeof getPostActions.failure>
    | ReturnType<typeof getPostAction>
    | ReturnType<typeof getPostSuccessAction>
    | ReturnType<typeof getPostFailureAction>
    | ReturnType<typeof clearPostAction>


/* ************************************************** */


/* State Type */
export type PostsState = {
    posts: {
        loading: boolean;
        data: Post[] | null;
        error: Error | null;
    };
    post: {
        // loading: boolean;
        // data: Post | null;
        // error: Error | null;
        // cache: {
        //     id: number;
        //     data: Post;
        // }[]
        [id: number]: {
            loading: boolean;
            data: Post | null;
            error: Error | null;
        }
    };
}

/* Initial State */
const initialState: PostsState = {
    posts: reducerUtils.initialize<Post[]>(),
    post: {}
}

/* Reducer */
const posts = (state: PostsState = initialState, action: PostsAction): PostsState => {
    switch (action.type) {
        // case GET_POSTS:
        // case GET_POSTS_SUCCESS:
        // case GET_POSTS_FAILURE:
        //     return handleAction(GET_POSTS, 'posts', true)(state, action);
        // case GET_POST:
        // case GET_POST_SUCCESS:
        // case GET_POST_FAILURE:
            // return handleAction(GET_POST, 'post')(state, action);

        case GET_POSTS:
            return {
                ...state,
                posts: reducerUtils.loading<Post[]>(state.posts.data)
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: reducerUtils.success<Post[]>( action.payload as Post[] )
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                posts: reducerUtils.failure( action.payload )
            }

        // case CLEAN_POST:
        //     return {
        //         ...state,
        //         post: {
        //             ...reducerUtils.initialize<Post>(),
        //             cache: state.post.cache
        //         }
        //     }

        case GET_POST: {
            const { meta: {id} } = action;
            return {
                ...state,
                post: {
                    ...state.post,
                    [id]: { ...reducerUtils.loading<Post>( state.post[id]?.data ) }
                }
            }
        }

        case GET_POST_SUCCESS: {
            const { meta: {id} } = action;
            return {
                ...state,
                post: {
                    ...state.post,
                    [id]: { ...reducerUtils.success<Post>(action.payload) }
                }
            }
        }

        case GET_POST_FAILURE:{
            const { meta: {id} } = action;
            return {
                ...state,
                post: {
                    ...state.post,
                    [id]: { ...reducerUtils.failure(action.payload) }
                }
            }
        }

        default: 
            return { ...state }
    }
}

export default posts;