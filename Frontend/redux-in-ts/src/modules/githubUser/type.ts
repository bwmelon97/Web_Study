import { ActionType } from "typesafe-actions";

import { getGithubUserAsync } from "./action";
import { GithubUser } from "../../api/githubUser";
import { AsyncState } from "../../lib/reducerUtils";


export type GithubUserAction = ActionType<typeof getGithubUserAsync>
export type GithubUserState = { githubUser: AsyncState<GithubUser, Error> }

// export type GithubUserState = {
//     loading:    boolean;
//     data:       GithubUser | null;
//     error:      Error | null;
// }
