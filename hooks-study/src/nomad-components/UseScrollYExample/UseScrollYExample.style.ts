import { Ref } from 'react';
import styled from 'styled-components';


export const Wrapper = styled.div<{height: number}>` 
    height: ${props => props.height}px;
    width: 100%;
`;

export const ContentBox = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: pink;
`;

export const EmptyBlock = styled.div<{height: number}>`
    height: ${props => props.height}px;
`;

export const ScrollBox = 
styled.div<{
    height: number
    ref: Ref<HTMLDivElement>
}>`
    position: relative;
    height: ${props => props.height}px;
    border: 1px solid black;
    overflow-y: auto;
`;

export const ScrollContent = styled.div`
    position: fixed;
`;