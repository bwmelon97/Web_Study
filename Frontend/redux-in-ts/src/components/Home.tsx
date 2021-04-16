import React from "react";
import { Link } from 'react-router-dom';

import Counter from "./Counter";


function Home () {

    return (
        <>
            <Counter/>
            <Link to='/posts' > 포스트 </Link>
        </>
    )
}

export default Home;