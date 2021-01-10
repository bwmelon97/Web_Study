import React, { useEffect, useRef, useState } from "react";


function UseRefTest() {
    const [count, setCount] = useState<number>(0);
    const refCount = useRef<number>(0);

    useEffect(() => {
        console.log('count is ' + count);
        console.log('refCount is ' + refCount.current);
    })

    return (
        <>
            <h1> count : {count} </h1>
            <h1> refCount : {refCount.current} </h1>
            
            <button onClick={ () => setCount(c => c + 1) } >count +</button>
            <button onClick={ () => refCount.current += 1 } >refCount +</button>
            <button onClick={ () => console.log('current ref is ' + refCount.current) } > show refCount </button>
        </>
    )
}

export default UseRefTest;