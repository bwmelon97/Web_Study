import { combineReducers } from 'redux';
import counter from "./counter";

const rootReducer = combineReducers({
    counter
})

export default rootReducer;

/* 루트 State의 타입 */
export type RootState = ReturnType<typeof rootReducer>