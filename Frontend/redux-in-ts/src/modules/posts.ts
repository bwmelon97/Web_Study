import { Post, getPosts, getPost } from "../api/posts";
import { createActionCreators, createPostsThunk, handleAction, reducerUtils } from "../lib/posts";

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
export type PostsState = {
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
    posts: reducerUtils.initialize<Post[]>(),
    post: reducerUtils.initialize<Post>()
}

/* Reducer */
const posts = (state: PostsState = initialState, action: PostsAction): PostsState => {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_FAILURE:
            return handleAction(GET_POSTS, 'posts', true)(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_FAILURE:
            return handleAction(GET_POST, 'post')(state, action);
        default: 
            return { ...state }
    }
}

export default posts;