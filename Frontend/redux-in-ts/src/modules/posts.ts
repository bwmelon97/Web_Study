import { Post, getPosts, getPost } from "../api/posts";
import { createActionCreators, createPostsThunk } from "../lib/posts";

/* Action Types */
const GET_POSTS = 'posts/GET_POSTS' as const;
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS' as const;
const GET_POSTS_FAILURE = 'posts/GET_POSTS_FAILURE' as const;

const GET_POST = 'posts/GET_POST' as const;
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS' as const;
const GET_POST_FAILURE = 'posts/GET_POST_FAILURE' as const;

/* Action Creators */
const getPostActions = createActionCreators(GET_POST)
const getPostsActions = createActionCreators(GET_POSTS)

/* Thunk Functions */
export const getPostReq = createPostsThunk( getPost, getPostActions );
export const getPostsReq = createPostsThunk( getPosts, getPostsActions );

/* ActionType */
export type PostsAction = 
    | ReturnType<typeof getPostActions.get>
    | ReturnType<typeof getPostActions.success>
    | ReturnType<typeof getPostActions.failure>
    | ReturnType<typeof getPostsActions.get>
    | ReturnType<typeof getPostsActions.success>
    | ReturnType<typeof getPostsActions.failure>


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