import React from "react";

import { useGithubUser } from "../../../hooks";


function UserProfile () {

    const { githubUser } = useGithubUser();
    const { loading, data, error } = githubUser

    if ( loading ) return <div>loading...</div>
    if ( !data ) return <div></div>
    if ( error ) return <div> Error !! <p>{error.message}</p> </div>

    const { avatar_url, name, bio } = data;

    return (
        <div>
            <div>
                <img src={avatar_url} alt="user thumbnail" />
                <div>{name}</div>
            </div>
            <p>{bio}</p>
        </div>
    )
}

export default UserProfile;