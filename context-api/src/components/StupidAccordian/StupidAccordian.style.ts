import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 250px;
`;

export const Header = styled.div`
    height: 50px;

    background-color: gray;
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

type BodyProps = {
    isOpen: boolean;
}

export const Body = styled.div <BodyProps> `
    height: 150px;
    padding: 20px;

    border: solid 1px gray;

    display: ${props => props.isOpen ? 'flex' : 'none'};
`;