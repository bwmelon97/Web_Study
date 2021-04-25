import { createReducer } from "typesafe-actions"

import { GET_GITHUB_USER, GET_GITHUB_USER_FAILURE, GET_GITHUB_USER_SUCCESS } from "./action"
import { GithubUserAction, GithubUserState } from "./type"


const initialState: GithubUserState = {
    loading: false,
    data: null,
    error: null
}

const githubUser = createReducer<GithubUserState, GithubUserAction>(initialState, {
    [GET_GITHUB_USER]: state => ({
        ...state,
        loading: true,
        data: null,
        error: null
    }),
    [GET_GITHUB_USER_SUCCESS]: (state, action) => ({
        ...state,
        loading: false,
        data: action.payload
    }),
    [GET_GITHUB_USER_FAILURE]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload   
    })
})


export default githubUser