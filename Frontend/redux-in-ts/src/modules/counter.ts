import { ActionType, createAction, createReducer } from 'typesafe-actions';

/* Action Types */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const SET_COUNTER = 'counter/SET_COUNTER';

/** Action Creaters 
 * createAction(액션타입)(): 해당 타입을 갖는 Empty Action Creator 생성
 * createAction(액션타입)<payload 타입>(): payload 프로퍼티까지 갖는 Action Creator 생성    
 */
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const setCounter = createAction(SET_COUNTER)<number>();

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