import React, { createContext, Dispatch, ReactNode, useState } from "react";

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
    title: string;          // Header 부분에 들어가는 제목
    content: string;        // Body 부분에 들어가는 내용물
    className?: string;     //
    color?: string;         //
    CustomBody?: ReactNode; //
}

function SmartAccordian( {title, content, className, color, CustomBody}: SmartAccordianProps ) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const value: SmartAccordianContextType = { isOpen, setIsOpen };

    return (
        <SmartAccordianContext.Provider value={value} >
            <S.AccordianWrapper className={className} >
                <SmartAccordianHeader title={title} isOpen={isOpen} setIsOpen={setIsOpen} color={color} />
                <SmartAccordianBody content={content} isOpen={isOpen} color={color} CustomBody={CustomBody} />
            </S.AccordianWrapper>
        </SmartAccordianContext.Provider>
    )
}

export default SmartAccordian;