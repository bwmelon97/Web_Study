import styled from 'styled-components';

export const AccordianWrapper = styled.div`
    width: 250px;
`;

type ColorProps = {
    color?: string;
}

export const HeaderWrapper = styled.div<ColorProps>`
    height: 50px;

    background-color: ${props => props.color ? props.color : "pink"};
    cursor: pointer;

    /* 글자의 드레그, 더블클릭, 블럭지정을 방지 */
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;
`;

type BodyWrapperProps = ColorProps & {
    isOpen: boolean;    
}

export const BodyWrapper = styled.div<BodyWrapperProps>`
    height: 150px;
    padding: 20px;

    border: solid 1px ${props => props.color ? props.color : 'pink' }  ;

    display: ${props => props.isOpen ? 'flex' : 'none'};
`;