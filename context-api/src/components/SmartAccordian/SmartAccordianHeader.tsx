import React, { Dispatch } from "react";

import * as S from "./SmartAccordian.style";

type SmartAccordianHeaderProps = {
    title: string;
    isOpen: boolean;
    setIsOpen: Dispatch<boolean>
    color?: string;
}

function SmartAccordianHeader({title, isOpen, setIsOpen, color}: SmartAccordianHeaderProps) {    
    return (
        <S.HeaderWrapper onClick={() => setIsOpen(!isOpen)} color={color} >
            { title }
        </S.HeaderWrapper>
    )    
}

export default SmartAccordianHeader;