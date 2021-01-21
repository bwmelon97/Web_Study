import React, { cloneElement, FC, ReactElement } from "react";

import { useFadeIn, TransitionStyle } from "../../nomad-hooks";


type Props = {
    transitionStyle?: TransitionStyle;
}

const UseFadeIn: FC<Props> = ({ children, transitionStyle }) => {

    const HTMLEl = useFadeIn(transitionStyle);

    return (
        <>
            {
                cloneElement(children as ReactElement<any>, {
                    ref: HTMLEl,
                    style: { opacity: '0' }
                })
            }
        </>
    )
}

export default UseFadeIn;