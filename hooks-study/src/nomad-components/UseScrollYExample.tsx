import React, { useState } from "react";
import styled from 'styled-components';

import { useScrollY } from "../nomad-hooks";


const Wrapper = styled.div<{height: number}>` 
    height: ${props => props.height}px;
    width: 100%;
`;

const ContentBox = styled.div`
    position: fixed;
    width: 100%;
    background-color: pink;
`;


function UseScrollYExample () {

    const { scrollY, innerHeight, scrollHeight } = useScrollY();

    const [boxheight, setBoxHeight] = useState(1500);
    const increaseBoxHeight = () => setBoxHeight(h => h + 100)

    return (
        <Wrapper height={boxheight} >
            <ContentBox>
                <h1>Hello ?</h1>
                <p> scroll_Y : {scrollY} </p>
                <p> innerHeight : {innerHeight} </p>
                <p> scrollHeight : {scrollHeight} </p>
                <button onClick={increaseBoxHeight} >Increase Height</button>
            </ContentBox>
        </Wrapper>
    )
}

export default UseScrollYExample