import { createReducer } from "typesafe-actions"

import { getGithubUserAsync } from "./action"
import { GithubUserAction, GithubUserState } from "./type"
import { asyncActionsToArray, asyncState, asyncStateHandler } from "../../lib/reducerUtils";


const initialState: GithubUserState = { githubUser: asyncState.initiate() };

const githubUser = createReducer<GithubUserState, GithubUserAction>(initialState).handleAction(
    asyncActionsToArray(getGithubUserAsync),
    asyncStateHandler(getGithubUserAsync, 'githubUser')
)

export default githubUser;


/*
    .handleAction([add, increment], (state, action) =>
        state + (action.type === 'ADD' ? action.payload : 1)
    );

    const githubUser = createReducer<...>(initialState)
    .handleAction([R, S, F], (state, action) => {
        switch(action.type) { ... }
    })
*/

// const githubUser = createReducer<GithubUserState, GithubUserAction>(initialState)
//     .handleAction([
//         getGithubUserAsync.request, 
//         getGithubUserAsync.success, 
//         getGithubUserAsync.failure, 
//     ], (state, action) => {
//         switch (action.type) {
//             case GET_GITHUB_USER:
//                 return {
//                     ...state,
//                     githubUser: asyncState.load()
//                 }

//             case GET_GITHUB_USER_SUCCESS: 
//                 return {
//                     ...state,
//                     githubUser: asyncState.success(action.payload)
//                 }

//             case GET_GITHUB_USER_FAILURE:
//                 return {
//                     ...state,
//                     githubUser: asyncState.failure(action.payload)
//                 }

//             default: 
//                 return {
//                     ...state
//                 }
//         }
//     })