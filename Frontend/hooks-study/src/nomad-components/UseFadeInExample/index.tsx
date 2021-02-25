import React, {  } from "react";

import UseFadeIn from "./UseFadeIn";


function UseFadeInExample() {

    return (
        <>
            <UseFadeIn transitionStyle={{delay: 1, duration: 3}} >
                <h1>hello</h1>
            </UseFadeIn>
        </>
    )    
}

export default UseFadeInExample