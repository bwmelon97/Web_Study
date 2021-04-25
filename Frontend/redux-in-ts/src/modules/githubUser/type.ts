import { ActionType } from "typesafe-actions";

import { getGithubUserAsync } from "./action";
import { GithubUser } from "../../api/githubUser";


export type GithubUserAction = ActionType<typeof getGithubUserAsync>

export type GithubUserState = {
    loading:    boolean;
    data:       GithubUser | null;
    error:      Error | null;
}