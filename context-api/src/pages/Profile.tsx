import React, { useContext } from "react";

import { UserContext } from "../store/users";

function Profile () {

    const context = useContext(UserContext);

    return(
        <div>
            <h2> Profile </h2>
            <p>
                job : { context.job }
            </p>
        </div>
    )

}

export default Profile;