import React, { useContext } from "react";

import { UserContext } from "../store/users";

function Board () {

    const context = useContext(UserContext);

    return(
        <div>
            <h2> Board </h2>
            <p> name : { context.name } </p>
        </div>
    )
}

export default Board;