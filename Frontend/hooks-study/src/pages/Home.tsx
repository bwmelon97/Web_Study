import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import { useTitle, useHover } from "../nomad-hooks";


function Home () {

    const updateTitle = useTitle('...loading');

    const onHover = () => { console.log('hi') }
    const { ElRef } = useHover<HTMLHeadingElement>(onHover);

    useEffect(() => {
        setTimeout(() => {
            updateTitle('Home')
        }, 1000);
    }, [updateTitle]);

    return (
        <>  
            <h1 ref={ElRef} >
                Home        
            </h1>
            <Link to='/profile' > 프로필 </Link>
        </> 
    )
}

export default Home;