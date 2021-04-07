import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from "../modules";
import { increase, decrease, setCounter } from "../modules/counter";


function useCounter () {
    /* States */
    const count = useSelector( (state: RootState) => state.counter.count );
    
    /* Dispatch Actions */
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])
    const onSetCounter = useCallback(
        (num: number) => dispatch(setCounter(num)), 
        [dispatch]
    )

    /* Return States & Dispatches */
    return {
        count,
        onIncrease,
        onDecrease,
        onSetCounter
    }
}

export default useCounter