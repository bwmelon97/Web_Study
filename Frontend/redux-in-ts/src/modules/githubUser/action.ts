import { AxiosError } from "axios";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { createAsyncAction } from "typesafe-actions";
import { RootState } from "..";

import { getGithubUser, GithubUser } from "../../api/githubUser";
import { GithubUserAction } from "./type";


export const GET_GITHUB_USER = 'githubUser/GET_GITHUB_USER';
export const GET_GITHUB_USER_SUCCESS = 'githubUser/GET_GITHUB_USER_SUCCESS';
export const GET_GITHUB_USER_FAILURE = 'githubUser/GET_GITHUB_USER_FAILURE';

export const getGithubUserAsync = createAsyncAction(
    GET_GITHUB_USER,
    GET_GITHUB_USER_SUCCESS,
    GET_GITHUB_USER_FAILURE
)<undefined, GithubUser, AxiosError>()

export const getGithubUserThunk = (username: string): ThunkAction <
    Promise<void>, RootState, null, GithubUserAction
> => async ( dispatch: Dispatch<GithubUserAction> ) => {
    const { request, success, failure } = getGithubUserAsync;
    dispatch( request() )
    try {
        const user = await getGithubUser(username);
        dispatch( success(user) )
    } catch (error) {
        dispatch( failure(error) )
    }
}