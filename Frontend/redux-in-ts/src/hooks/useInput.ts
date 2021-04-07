import { ChangeEvent, useState } from "react";

function useInput () {

    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { target: {value} } = e;
        
        setValue(value);
    }

    return {
        value,
        onChange
    }
}

export default useInput