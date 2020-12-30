import React, { Dispatch } from "react";

import * as S from "./SmartAccordian.style";

type SmartAccordianHeaderProps = {
    title: String;
    isOpen: boolean;
    setIsOpen: Dispatch<boolean>
}

function SmartAccordianHeader({title, isOpen, setIsOpen}: SmartAccordianHeaderProps) {    
    return (
        <S.HeaderWrapper onClick={() => setIsOpen(!isOpen)} >
            { title }
        </S.HeaderWrapper>
    )    
}

export default SmartAccordianHeader;