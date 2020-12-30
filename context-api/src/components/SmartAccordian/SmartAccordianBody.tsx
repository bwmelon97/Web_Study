import React, { ReactNode } from "react";

import * as S from "./SmartAccordian.style";


type SmartAccordianBodyProps = {
    content: string;
    isOpen: boolean;
    color?: string;
    CustomBody?: ReactNode;
}

function SmartAccordianBody ({content, isOpen, color, CustomBody}: SmartAccordianBodyProps) {
    return (
        <S.BodyWrapper isOpen={isOpen} color={color} >
            { CustomBody ? CustomBody : content }
        </S.BodyWrapper>
    )
}

export default SmartAccordianBody;