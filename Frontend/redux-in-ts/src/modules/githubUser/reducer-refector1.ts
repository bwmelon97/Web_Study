import { createReducer } from "typesafe-actions"

import { GET_GITHUB_USER, GET_GITHUB_USER_FAILURE, GET_GITHUB_USER_SUCCESS } from "./action"
import { GithubUserAction, GithubUserState } from "./type"
import { asyncState } from "../../lib/reducerUtils";


const initialState: GithubUserState = { githubUser: asyncState.initiate() };

const githubUser = createReducer<GithubUserState, GithubUserAction>(initialState, {
    [GET_GITHUB_USER]: state => ({
        ...state,
        githubUser: asyncState.load()
    }),
    [GET_GITHUB_USER_SUCCESS]: (state, action) => ({
        ...state,
        githubUser: asyncState.success(action.payload)
    }),
    [GET_GITHUB_USER_FAILURE]: (state, action) => ({
        ...state,
        githubUser: asyncState.failure(action.payload)
    })
})

export default githubUser