import React, {  } from "react";

import { useFadeIn } from "../nomad-hooks";


function UseFadeInExample() {

    const HTMLEl = useFadeIn<HTMLHeadingElement>();

    return (
        <>
            <h1 ref={HTMLEl} style={{opacity: 0}} >
                hello
            </h1>
        </>
    )    
}

export default UseFadeInExample