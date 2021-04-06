import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    /* Reducer List */
})

export default rootReducer;

/* 루트 State의 타입 */
export type RootState = ReturnType<typeof rootReducer>