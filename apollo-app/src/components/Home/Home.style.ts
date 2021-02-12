import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

    export const Header = styled.div`
        height: 45vh;
        width: 100%;
        background-image: linear-gradient(-45deg, #d754ab, #fd723a);

        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    `;

        export const Title = styled.h1`
            margin: 1rem 0;
            font-size: 3rem;
            color: white;

            -ms-user-select: none; 
            -moz-user-select: -moz-none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            user-select: none;
        `;

        export const Subtitle = styled.h2`
            margin: 0;
            font-size: 2rem;
            color: white;

            -ms-user-select: none; 
            -moz-user-select: -moz-none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            user-select: none;
        `;

    export const Body = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

        export const Message = styled.p`
            font-size: 1rem;
            color: gray;
        `;

        export const MovieGrid = styled.div`
            margin-top: -5vh;
            width: 80%;

            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
        `;

            export const MovieLink = styled(Link)<{url: string}>`
                width: 18%;
                padding-top: 25%;
                background-image: url(${props => props.url});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                margin: 12px 0;
            `;