import React, {  } from "react";
import styled from 'styled-components';

import { useFullScreen } from "../nomad-hooks";


const ImageContainer = styled.div`
    position: relative;
    height: 300px;
    width: 500px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ExitButton = styled.button`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

function UseFullScreenExample () {

    const { 
        element, 
        isFullScreen, 
        triggerFullScreen, 
        exitFullScreen,
    } = useFullScreen<HTMLDivElement>();

    return (
        <div>
            <ImageContainer ref={element} >
                <StyledImage 
                    src='https://www.fernbyfilms.com/wp-content/uploads/2016/06/720x405-zootopia.jpg'
                    alt='zootopia'
                />
                { isFullScreen &&
                    <ExitButton onClick={exitFullScreen} > Exit Full Screen </ExitButton>
                }
            </ImageContainer>
            <button onClick={triggerFullScreen} > Full Screen </button>
        </div>
    )
}

export default UseFullScreenExample;