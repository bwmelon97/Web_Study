import React, {  } from "react";

import { useInput } from "../nomad-hooks";


function TextInput () {

    const MAX_LEN = 8;
    const maxLenConstrain = (str: string) => str.length <= MAX_LEN;
    // const exceptCharConstrain = (str: string) => !str.includes('@');

    const name = useInput({
        placeHolder: '이름을 입력하세요.',
        validator: maxLenConstrain,
    });

    return (
        <input type='text' {...name} />
    )
}


export default TextInput;