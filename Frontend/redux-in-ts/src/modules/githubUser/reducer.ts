import { createReducer } from "typesafe-actions"

import { GET_GITHUB_USER, GET_GITHUB_USER_FAILURE, GET_GITHUB_USER_SUCCESS } from "./action"
import { GithubUserAction, GithubUserState } from "./type"
import { asyncState } from "../../lib/reducerUtils";


const initialState: GithubUserState = asyncState.initiate();

const githubUser = createReducer<GithubUserState, GithubUserAction>(initialState, {
    [GET_GITHUB_USER]: state => ({
        ...state,
        ...asyncState.load()
    }),
    [GET_GITHUB_USER_SUCCESS]: (state, action) => ({
        ...state,
        ...asyncState.success(action.payload)
    }),
    [GET_GITHUB_USER_FAILURE]: (state, action) => ({
        ...state,
        ...asyncState.failure(action.payload)
    })
})


export default githubUser