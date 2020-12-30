import React, { } from "react";

import * as S from "./SmartAccordian.style";


type SmartAccordianBodyProps = {
    content: string;
    isOpen: boolean;
    color?: string;
}

function SmartAccordianBody ({content, isOpen, color}: SmartAccordianBodyProps) {
    return (
        <S.BodyWrapper isOpen={isOpen} color={color} >
            { content }
        </S.BodyWrapper>
    )
}

export default SmartAccordianBody;