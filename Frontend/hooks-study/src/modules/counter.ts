import { createAction, ActionType, createReducer } from 'typesafe-actions';

/* Action Types */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


/* Actions Creater Functions */
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();


/* */
const actions = { increase, decrease };
type CounterAction = ActionType<typeof actions>;


/* */
type CounterState = { count: number };
const initialState: CounterState = { count: 0 };


/* Reducer */
const counter = createReducer<CounterState, CounterAction> (initialState, {
    [INCREASE]: state => ({ ...state, count: state.count + 1 }),
    [DECREASE]: state => ({ ...state, count: state.count - 1 }),
})

// function counter (state: CounterState = initialState, action: CounterAction): CounterState {

//     switch(action.type) {
//         case INCREASE:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }

//         case DECREASE:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }

//         default:
//             return {
//                 ...state
//             }
//     }
// }

export default counter;