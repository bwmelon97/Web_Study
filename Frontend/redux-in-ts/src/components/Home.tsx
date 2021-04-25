import React from "react";
import { Link } from 'react-router-dom';

import Counter from "./Counter";
import GithubUser from "./GithubUser";


function Home () {

    return (
        <>
            <Counter />
            <Link to='/posts' > 포스트 </Link>
            <GithubUser />
        </>
    )
}

export default Home;