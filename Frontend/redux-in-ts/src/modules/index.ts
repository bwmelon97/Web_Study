import { combineReducers } from 'redux';
import counter from "./counter";
// import posts from "./posts";
import {posts, post} from "./posts";
import githubUser from "./githubUser";

const rootReducer = combineReducers({
    counter, posts, post, githubUser
})

export default rootReducer;

/* 루트 State의 타입 */
export type RootState = ReturnType<typeof rootReducer>