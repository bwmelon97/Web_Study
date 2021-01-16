import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import { useTitle } from "../nomad-hooks";


function Profile () {

    const updateTitle = useTitle('...loading');
    
    useEffect(() => {
        setTimeout(() => {
            updateTitle('Profile')
        }, 1000);
    }, [updateTitle]);

    return (
        <>  
            <h1>
                Profile
            </h1>
            <Link to='/' > 홈 </Link>
        </> 
    )
}

export default Profile;