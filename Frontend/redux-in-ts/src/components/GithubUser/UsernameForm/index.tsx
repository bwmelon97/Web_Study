import React, { ChangeEvent, FormEvent, useState } from "react";
import { useGithubUser } from "../../../hooks";

function UsernameForm () {

    const { getGithubUser } = useGithubUser();
    
    const [ value, setValue ] = useState<string>('');
    const onChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        setValue(e.target.value);
    }

    const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        getGithubUser(value);
    }

    return (
        <form onSubmit={onSubmit} >
            <input onChange={onChange} value={value} placeholder="Github 계정명을 입력하세요." />
            <button type='submit' >조회</button>
        </form>
    )
}

export default UsernameForm