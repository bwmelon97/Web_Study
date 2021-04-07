import React from "react";

import { useCounter } from "../hooks";


function Counter () {

    const {
        count,
        onIncrease,
        onDecrease,
    } = useCounter();

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={onIncrease} >+</button>
            <button onClick={onDecrease} >-</button>
        </div>
    )
}

export default Counter;