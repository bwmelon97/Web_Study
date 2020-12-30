import React, { createContext, Dispatch, useState } from "react";

import * as S from "./SmartAccordian.style";
import SmartAccordianHeader from "./SmartAccordianHeader";
import SmartAccordianBody from "./SmartAccordianBody";


type SmartAccordianContextType = {
    isOpen: boolean;
    setIsOpen: Dispatch<boolean>;
}

const defaultContext: SmartAccordianContextType = {
    isOpen: false,
    setIsOpen: () => {}
}

const SmartAccordianContext = createContext(defaultContext);

///////////

type SmartAccordianProps = {
    title: String;
    content: String;
}

function SmartAccordian( {title, content}: SmartAccordianProps ) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const value: SmartAccordianContextType = { isOpen, setIsOpen };

    return (
        <SmartAccordianContext.Provider value={value} >
            <S.AccordianWrapper>
                <SmartAccordianHeader title={title} isOpen={isOpen} setIsOpen={setIsOpen} />
                <SmartAccordianBody content={content} isOpen={isOpen} />
            </S.AccordianWrapper>
        </SmartAccordianContext.Provider>
    )
}

export default SmartAccordian;