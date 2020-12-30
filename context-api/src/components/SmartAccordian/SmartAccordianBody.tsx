import {  } from "react";

import * as S from "./SmartAccordian.style";


type SmartAccordianBodyProps = {
    content: String;
    isOpen: boolean;
}

function SmartAccordianBody ({content, isOpen}: SmartAccordianBodyProps) {
    return (
        <S.BodyWrapper isOpen={isOpen}>
            { content }
        </S.BodyWrapper>
    )
}

export default SmartAccordianBody;