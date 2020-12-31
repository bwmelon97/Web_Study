import React, { ReactNode } from "react";

import * as S from "./SmartAccordian.style";
import { useAccordianContext } from "./";


type SmartAccordianBodyProps = {
    content: string;
    color?: string;
    CustomBody?: ReactNode;
}

function SmartAccordianBody ({content, color, CustomBody}: SmartAccordianBodyProps) {
    
    const { isOpen } = useAccordianContext();

    return (
        <S.BodyWrapper isOpen={isOpen} color={color} >
            { CustomBody ? CustomBody : content }
        </S.BodyWrapper>
    )
}

export default SmartAccordianBody;