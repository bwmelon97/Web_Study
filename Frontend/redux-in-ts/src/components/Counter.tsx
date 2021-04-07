import React from "react";

import { useCounter, useInput } from "../hooks";


function Counter () {

    const {
        count,
        onIncrease,
        onDecrease,
        onSetCounter
    } = useCounter();

    const {value, onChange} = useInput();

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={onIncrease} >+</button>
            <button onClick={onDecrease} >-</button>
            <input type='text' value={value} onChange={onChange} />
            <button onClick={() => onSetCounter(+value) } > Set Counter </button>
        </div>
    )
}

export default Counter;