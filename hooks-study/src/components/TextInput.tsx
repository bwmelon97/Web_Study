import React, { useLayoutEffect, useRef } from "react";


function TextInput () {

    const InputEl = useRef<HTMLInputElement>(null);

    // const focusInput = () => InputEl.current?.focus();
    const focusInput = () => {
        const { current } = InputEl;
        if (current !== null) { current.focus(); }
    };
    // useEffect(focusInput, []);
    useLayoutEffect(focusInput, []);

    return (
        <>
            <input type='input' ref={InputEl} />
            <button onClick={focusInput} > Focus Input </button>
        </>
    )
}


export default TextInput;