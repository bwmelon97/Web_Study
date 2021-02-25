import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from "../store/users";
import StupidAccordian from "../components/StupidAccordian";
import SmartAccordian from "../components/SmartAccordian";

function Home () {

    const user = useContext(UserContext);

    return(
        <div>
            <h2> Home </h2>
            <p> { user.name } </p>
            <p> { user.job } </p>

            <Link to='/board' > Board </Link>
            <Link to='/manage' > Manage </Link>

            <StupidAccordian />
            <SmartAccordian 
                title="I'm Smart Accordian" 
                content='And also have warm heart :D'
            />
            <StyledAccordian 
                title="I'm Styled Accordian ^_^"
                content="hehe~"
                color='#AFEEEE'
            />
            <SmartAccordian 
                title="I'm Smart Accordian" 
                content='And also have warm heart :D'
                CustomBody={ <SimpleBody /> }
            />
        </div>
    )
}


/* Example */
const StyledAccordian = styled(SmartAccordian)`
    width: 300px;
`;

function SimpleBody() {
    return (
        <div>
            Hello World !!
        </div>
    )
}

export default Home;