import React, { ChangeEvent, FormEvent, useState } from "react";

import { useGithubUser } from "../../../hooks";
import * as S from "./UsernameForm.style";


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
        <S.GithubUsernameForm onSubmit={onSubmit} >
            <S.FormInput onChange={onChange} value={value} placeholder="Github 계정명을 입력하세요." />
            <S.FormButton type='submit' >조회</S.FormButton>
        </S.GithubUsernameForm>
    )
}

export default UsernameForm