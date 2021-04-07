/* Action Types */
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const SET_COUNTER = 'counter/SET_COUNTER' as const;

/* Action Creaters */
export const increase = () => {
    return { type: INCREASE }
}

export const decrease = () => {
    return { type: DECREASE }
}

export const setCounter = (num: number) => {
    return {
        type: SET_COUNTER, 
        payload: num
    }
}

/* Type of Action Objects */
type CounterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease> 
    | ReturnType<typeof setCounter>


/* State Type */
type CounterState = {
    count: number
}

/* initial State */
const initialState: CounterState = {
    count: 0
}

/* Reducer */
function counter (
    state: CounterState = initialState,
    action: CounterAction
): CounterState
{
    switch (action.type) {
        case INCREASE:
            return {
                count: state.count + 1
            }

        case DECREASE:
            return {
                count: state.count - 1
            }

        case SET_COUNTER:
            return {
                count: action.payload
            }

        default: 
            return {
                ...state
            }
    }
}

export default counter;