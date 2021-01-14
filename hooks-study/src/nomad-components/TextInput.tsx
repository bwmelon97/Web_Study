import {  } from "react";

import { useInput } from "../nomad-hooks";


function TextInput () {

    return (
        <input type='text' onChange={e => e.target.value} />
    )
}


export default TextInput;