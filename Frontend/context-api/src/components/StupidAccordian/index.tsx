import React, { useState } from "react";

import * as S from "./StupidAccordian.style";


function StupidAccordian () {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <S.Wrapper>
            <S.Header onClick={() => setIsOpen(!isOpen)} >I'm Stupid Accordian :(</S.Header>
            <S.Body isOpen={isOpen} >But I have warm heart ^-^</S.Body>
        </S.Wrapper>
    )
}


export default StupidAccordian;