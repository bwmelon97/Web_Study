import { Middleware } from 'redux'

import { RootState } from '../modules/index'

/**
 * interface Middleware<
 *     DispatchExt = {}, // optional override return behavior of `dispatch`
 *     S = any, // type of the Redux store state
 *     D extends Dispatch = Dispatch // type of the dispatch method
 * >
 */
const myLogger: Middleware<
    {}, RootState
> = storeApi => next => action => {
    console.log(action);
    const result = next(action);    // 다음 미들웨어로 액션을 넘김김
    console.log(storeApi.getState())
    return result;
}

export default myLogger;