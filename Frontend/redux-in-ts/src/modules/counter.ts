import { Dispatch } from 'react';
import { ActionType, createAction, createReducer } from 'typesafe-actions';

/* Action Types */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const SET_COUNTER = 'counter/SET_COUNTER';

/** Action Creators 
 * createAction(액션타입)(): 해당 타입을 갖는 Empty Action Creator 생성
 * createAction(액션타입)<payload 타입>(): payload 프로퍼티까지 갖는 Action Creator 생성    
 */
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const setCounter = createAction(SET_COUNTER)<number>();

/** Thunk Action Creator 
 * Thunk Action Creator는 함수를 리턴하는 액션 생성자를 의미한다.
 * Thunk 미들웨어: action이 function ? action(dispatch, getState) : next(action)
 * 
 * Thunk Action Creator가 반환하는 함수는 인자로 dispatch와 getState를 받고,
 * 그 중 첫 번째 인자인 dispatch를 이용해서 다른 action을 dispatch 시키는 구조를 띈다.
 */
export const increaseDelay = () => (dispatch: Dispatch<CounterAction>) => {
    setTimeout( () => dispatch(increase()), 1000 );
}
export const decreaseDelay = () => (dispatch: Dispatch<CounterAction>) => {
    setTimeout( () => dispatch(decrease()), 1000 );
}

/** Type of Action Objects 
 * 모든 action creater를 담은 하나의 객체 actions를 만들고
 * ActionType<typeof actions>를 해당 모듈의 ActionType으로 만든다.
 */
const actions = { increase, decrease, setCounter };
type CounterAction = ActionType<typeof actions>;

/* State Type */
type CounterState = {
    count: number
}

/* initial State */
const initialState: CounterState = {
    count: 0
}

/** Reducer 
 * 1. Object Mapping Method
 * createReducer<모듈 State, 모듈 Action>(초기 State, {
 *     [액션 타입1]: (state, action) => {
 *         ... 함수 내용
 *         return { 모듈 State }
 *     },
 *     [액션 타입2]: ... ,
 *     ...
 * })
 * 
 * 2. Method Chainning Method
 * createReducer<모듈 State, 모듈 Action>(초기 State)
 * .handleAction(액션 생성자, (state, action) => {
 *     ... 함수 내용
 *     return { 모듈 State }
 * })
 * .handleAction(...)
 * ...
 */
/* 1. Object Mapping Method */
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [SET_COUNTER]: (state, action) => ({ count: action.payload })
})

/* 2. Method Chainning Method */
// const counter = createReducer<CounterState, CounterAction>(initialState)
//     .handleAction(increase, state => ({count: state.count + 1}))
//     .handleAction(decrease, state => ({count: state.count - 1}))
//     .handleAction(setCounter, (state, action) => ({count: action.payload}))

export default counter;