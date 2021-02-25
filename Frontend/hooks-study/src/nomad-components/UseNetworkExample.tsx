import React, {  } from "react";

import { useNetwork } from "../nomad-hooks";


function UseNetworkExample () {

    const onChange = (isOnline: boolean) => { 
        if (isOnline) {
            console.log("now it's online");
        } 
        else {
            console.log("now it's offline. TT");
        }
    }
    const isOnline = useNetwork(onChange);

    return (
        <h1>
            {isOnline ? 'Online' : 'Offline'}
        </h1>
    )
}

export default UseNetworkExample;