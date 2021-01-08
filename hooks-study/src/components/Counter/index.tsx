import React, {  } from "react";

import Header from "./Header";
import BottonBox from "./ButtonBox";


function Counter() {

    console.log('[Counter] render')

    return (
        <div>
            <Header />
            <BottonBox />
        </div>
    )
}

export default Counter;