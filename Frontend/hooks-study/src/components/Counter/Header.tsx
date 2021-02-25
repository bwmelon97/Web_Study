import React, {  } from "react";

import useCounter from "../../hooks/useCounter";


function Header() {
    
    console.log('[Counter Header] render');
    
    const { count } = useCounter();

    return (
        <h1> { count } </h1>
    )
}

export default Header;