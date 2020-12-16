import React, { useContext } from "react";

import { UserContext } from "../store/users";

function About () {

    const context = useContext(UserContext);

    return(
        <div>
            <h2> About </h2>
            <p> name : { context.name } </p>
        </div>
    )
}

export default About;