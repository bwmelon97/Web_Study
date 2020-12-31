import React from "react";

import * as S from "./SmartAccordian.style";
import { useAccordianContext } from "./";


type SmartAccordianHeaderProps = {
    title: string;
    color?: string;
}

function SmartAccordianHeader({title, color}: SmartAccordianHeaderProps) {    
    
    const { isOpen, setIsOpen } = useAccordianContext();
    
    return (
        <S.HeaderWrapper onClick={() => setIsOpen(!isOpen)} color={color} >
            { title }
        </S.HeaderWrapper>
    )    
}

export default SmartAccordianHeader;