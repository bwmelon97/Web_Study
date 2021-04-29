import { Dispatch } from "react";
import { action, ActionType, createAction, createAsyncAction, createReducer } from "typesafe-actions";
import { Post, getPosts, getPost } from "../../api/posts";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { asyncActionsToArray, asyncActionsWithMetaToArray, AsyncState, asyncState, asyncStateHandler, AsyncStateWithCache, isPayloadMetaAction } from '../../lib/reducerUtils'

/* Action Types */
export const GET_POSTS = 'posts/GET_POSTS' as const;
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS' as const;
const GET_POSTS_FAILURE = 'posts/GET_POSTS_FAILURE' as const;

export const GET_POST = 'posts/GET_POST' as const;
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS' as const;
const GET_POST_FAILURE = 'posts/GET_POST_FAILURE' as const;

/* Action Creators */
const getPostsActions = createAsyncAction(
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE
)<any, Post[], Error>()

type MetaID = { id: number }
const getPostActions = createAsyncAction(
    GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE
)<[any, MetaID], [Post, MetaID], [Error, MetaID]>()


// const getPostAction = ( meta: {id: number} ) => ({ type: GET_POST, meta })
// const getPostSuccessAction = (
//     payload: Post,
//     meta: {id: number}
// ) => ({ type: GET_POST_SUCCESS, payload, meta })
// const getPostFailureAction = ( 
//     payload: Error, 
//     meta: {id: number} 
// ) => ({ type: GET_POST_FAILURE, payload, meta })

/* Thunk Functions */
export const getPostsReq = createAsyncThunk(getPostsActions, getPosts)

export const getPostReqById = (id: number) => async ( dispatch: Dispatch<PostsAction> ) => {
    // dispatch( getPostAction({id}) );
    // try {
    //     const postData = await getPost(id);
    //     dispatch( getPostSuccessAction(postData, {id}) );
    // } catch (error) {
    //     dispatch( getPostFailureAction(error, {id}) );
    // }
    const { request, success, failure } = getPostActions

    dispatch( request(undefined, { id }) );
    try {
        const postData = await getPost(id);
        dispatch( success(postData, { id }) );
    } catch (error) {
        dispatch( failure(error, { id }) );
    }
}

/* ActionType */
export type PostsAction = ActionType<typeof getPostsActions> | ActionType<typeof getPostActions>
    // | ReturnType<typeof getPostAction>
    // | ReturnType<typeof getPostSuccessAction>
    // | ReturnType<typeof getPostFailureAction>


/* ************************************************** */


/* State Type */
export type PostsState = {
    posts: AsyncState<Post[]>;
}

export type PostState = {
    post: AsyncStateWithCache<Post>;
}

/* Initial State */
const postsInitialState: PostsState = {
    posts: asyncState.initiate(),
}
const postInitialState: PostState = {
    post: {}
}

// const sampleAction1 = createAction('HI')()
// const sampleAction1 = createAction('HI')<number, {id: number}>()
// const sampleAction1 = createAction(GET_POST)<any, {id: number}>()

/* Reducer */
export const posts = createReducer<PostsState, PostsAction>(postsInitialState).handleAction(
    asyncActionsToArray(getPostsActions),
    asyncStateHandler(getPostsActions, 'posts'),
)

export const post = createReducer<PostState, PostsAction>(postInitialState).handleAction(
    asyncActionsWithMetaToArray(getPostActions),
    asyncStateHandler(getPostActions, 'post')
)



// .handleAction(
//     getPostActions.request,
//     () => {

//     }
// )
// .handleAction([getPostAction],
//     (state, action) => {
//         const { meta: {id} } = action;
//         return {
//             ...state,
//             post: {
//                 ...state.post,
//                 [id]: { ...asyncState.load<Post>( state.post[id]?.data ) }
//             }
//         }
//     }
// )
// .handleAction([getPostSuccessAction, getPostFailureAction], (state, action) => {})


// const posts = (state: PostsState = initialState, action: PostsAction): PostsState => {
//     switch (action.type) {

//         case GET_POSTS:
//             return {
//                 ...state,
//                 posts: reducerUtils.loading<Post[]>(state.posts.data)
//             }
//         case GET_POSTS_SUCCESS:
//             return {
//                 ...state,
//                 posts: reducerUtils.success<Post[]>( action.payload as Post[] )
//             }
//         case GET_POSTS_FAILURE:
//             return {
//                 ...state,
//                 posts: reducerUtils.failure( action.payload )
//             }

//         case GET_POST: {
//             const { meta: {id} } = action;
//             return {
//                 ...state,
//                 post: {
//                     ...state.post,
//                     [id]: { ...reducerUtils.loading<Post>( state.post[id]?.data ) }
//                 }
//             }
//         }

//         case GET_POST_SUCCESS: {
//             const { meta: {id} } = action;
//             return {
//                 ...state,
//                 post: {
//                     ...state.post,
//                     [id]: { ...reducerUtils.success<Post>(action.payload) }
//                 }
//             }
//         }

//         case GET_POST_FAILURE:{
//             const { meta: {id} } = action;
//             return {
//                 ...state,
//                 post: {
//                     ...state.post,
//                     [id]: { ...reducerUtils.failure(action.payload) }
//                 }
//             }
//         }

//         default: 
//             return { ...state }
//     }
// }

export default posts;