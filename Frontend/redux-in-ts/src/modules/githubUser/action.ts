import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";

import { getGithubUser, GithubUser } from "../../api/githubUser";
import createAsyncThunk from "../../lib/createAsyncThunk";


export const GET_GITHUB_USER = 'githubUser/GET_GITHUB_USER';
export const GET_GITHUB_USER_SUCCESS = 'githubUser/GET_GITHUB_USER_SUCCESS';
export const GET_GITHUB_USER_FAILURE = 'githubUser/GET_GITHUB_USER_FAILURE';

export const getGithubUserAsync = createAsyncAction(
    GET_GITHUB_USER,
    GET_GITHUB_USER_SUCCESS,
    GET_GITHUB_USER_FAILURE
)<any, GithubUser, AxiosError>()

export const getGithubUserThunk = createAsyncThunk( getGithubUserAsync, getGithubUser )