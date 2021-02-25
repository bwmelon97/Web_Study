import React, { createContext, Dispatch, ReactNode, useContext, useState } from "react";

import * as S from "./SmartAccordian.style";
import SmartAccordianHeader from "./SmartAccordianHeader";
import SmartAccordianBody from "./SmartAccordianBody";


/* SmartAccordian Context */

type SmartAccordianContextType = {
    isOpen: boolean;
    setIsOpen: Dispatch<boolean>;
}

const defaultContext: SmartAccordianContextType = {
    isOpen: false,
    setIsOpen: () => {}
}

const SmartAccordianContext = createContext(defaultContext);

export const useAccordianContext = () => useContext(SmartAccordianContext);


/* SmartAccordian Component */

type SmartAccordianProps = {
    title: string;          // Header 부분에 들어가는 제목
    content: string;        // Body 부분에 들어가는 내용물
    className?: string;     // Styled-Component로 직접 스타일을 추가할 수 있음
    color?: string;         // 특정 color를 직접 지정할 수 있도록 함
    CustomBody?: ReactNode; // Body 부분에 Customising한 컴포넌트를 넣을 수 있도록 함
}

function SmartAccordian( {title, content, className, color, CustomBody}: SmartAccordianProps ) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const value: SmartAccordianContextType = { isOpen, setIsOpen };     /* 사실상 state를 context에 담는 것임. */

    return (
        <SmartAccordianContext.Provider value={value} >
            <S.AccordianWrapper className={className} >
                <SmartAccordianHeader title={title} color={color} />
                <SmartAccordianBody content={content} color={color} CustomBody={CustomBody} />
            </S.AccordianWrapper>
        </SmartAccordianContext.Provider>
    )
}

export default SmartAccordian;