import React, {  } from "react";

import useCounter from "../../../hooks/useCounter";


function BottonBox () {

    const { onIncrease, onDecrease } = useCounter();

    console.log('[Counter BottonBox] render');

    return(
        <div>
            <button onClick={onIncrease} >+</button>
            <button onClick={onDecrease} >-</button>
        </div>
    )
}

export default BottonBox ;