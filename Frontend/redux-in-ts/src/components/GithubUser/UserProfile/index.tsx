import React from "react";

import { useGithubUser } from "../../../hooks";
import * as S from "./UserProfile.style";


function UserProfile () {

    const { githubUser } = useGithubUser();
    const { loading, data, error } = githubUser

    const style = {width: '400px', margin: '0 auto'}
    if ( loading ) return <div style={style} >loading...</div>
    if ( error ) return <div style={style} > Error !! <p>{error.message}</p> </div>
    if ( !data ) return <div></div>

    const { avatar_url, name, bio } = data;

    return (
        <S.GithubProfileInfo>
            <S.ProfileHead>
                <S.ProfileImg src={avatar_url} alt="user thumbnail" />
                <S.ProfileName>{name}</S.ProfileName>
            </S.ProfileHead>
            <p>{bio}</p>
        </S.GithubProfileInfo>
    )
}

export default UserProfile;