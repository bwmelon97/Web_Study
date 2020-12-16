import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { UserContext } from "../store/users";

function Home () {

    const user = useContext(UserContext);

    return(
        <div>
            <h2> Home </h2>
            <p> { user.name } </p>
            <p> { user.job } </p>

            <Link to='/board' > Board </Link>
            <Link to='/manage' > Manage </Link>
        </div>
    )
}

export default Home;