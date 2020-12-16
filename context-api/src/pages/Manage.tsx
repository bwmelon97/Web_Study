import React, { useContext } from "react";

import { UserContext } from "../store/users";

function Manage () {

    const context = useContext(UserContext);

    return(
        <div>
            <h2> Manage </h2>
            <p>
                job : { context.job }
            </p>
        </div>
    )

}

export default Manage;