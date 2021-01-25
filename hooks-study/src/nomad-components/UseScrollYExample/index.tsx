import React, { Ref, useState } from "react";

import * as S from "./UseScrollYExample.style";
import { useScrollY } from "../../nomad-hooks";


function UseScrollYExample () {

    const { scrollY, innerHeight, scrollHeight } = useScrollY();

    const [boxheight, setBoxHeight] = useState(1500);
    const increaseBoxHeight = () => setBoxHeight(h => h + 100)

    const { 
        element,
        scrollY: scrollYOfScrollBox,
        innerHeight: innerHeightOfScrollBox,
        scrollHeight: scrollHeightOfScrollBox,
    } = useScrollY('component');
    const [scrollBoxHeight, setScrollBoxHeight ] = useState(500);
    const increaseScrollBoxHeight = () => setScrollBoxHeight(h => h + 50);

    const [scrollContentHeight, setScrollContentHeight ] = useState(500);
    const increaseScrollContentHeight = () => setScrollContentHeight(h => h + 50);

    return (
        <S.Wrapper height={boxheight} >
            <S.ContentBox>
                <h1>Hello ?</h1>
                <p> scroll_Y : {scrollY} </p>
                <p> innerHeight : {innerHeight} </p>
                <p> scrollHeight : {scrollHeight} </p>
                <button onClick={increaseBoxHeight} >Increase Whole Height</button>
            </S.ContentBox>
            <S.EmptyBlock height={220} />

            <S.ScrollBox height={scrollBoxHeight} ref={element as Ref<HTMLDivElement>} >
                <S.ScrollContent>
                    <h1>Hi !</h1>
                    <p> scroll_Y : {scrollYOfScrollBox} </p>
                    <p> innerHeight : {innerHeightOfScrollBox} </p>
                    <p> scrollHeight : {scrollHeightOfScrollBox} </p>
                    <button onClick={increaseScrollContentHeight} >Increase Scroll Content Height</button>
                    <button onClick={increaseScrollBoxHeight} >Increase Scroll Box Height</button>
                </S.ScrollContent>
                <S.EmptyBlock height={scrollContentHeight} />
            </S.ScrollBox>
        </S.Wrapper>
    )
}

export default UseScrollYExample