import React, { cloneElement, FC, ReactElement } from "react";

import { useFadeIn } from "../../nomad-hooks";

const UseFadeIn: FC = ({ children }) => {

    const HTMLEl = useFadeIn();

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