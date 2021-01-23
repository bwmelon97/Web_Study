import React, {  } from "react";
import styled from 'styled-components';

import { useScrollY } from "../nomad-hooks";


const Wrapper = styled.div` 
    height: 2000px;
    width: 100%;
`;

const ContentBox = styled.div`
    position: fixed;
`;


function UseScrollYExample () {

    const { scrollY } = useScrollY();

    return (
        <Wrapper>
            <ContentBox>
                <h1>Hello ?</h1>
                <p> scroll_Y : {scrollY} </p>
            </ContentBox>
        </Wrapper>
    )
}

export default UseScrollYExample