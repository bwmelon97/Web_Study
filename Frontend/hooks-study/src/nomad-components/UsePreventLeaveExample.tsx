import React, {  } from "react";
import { usePreventLeave, useBeforeLeave } from "../nomad-hooks";


function UsePreventLeaveExample () {

    const { lockLeaving, unLockLeaving } = usePreventLeave();

    const begForLife = () => { console.log("Please Don't leave me") }
    useBeforeLeave(begForLife);

    return (
        <>
            No way !
            <button onClick={lockLeaving} > 잠금 </button>
            <button onClick={unLockLeaving} > 해제 </button>
        </>
    )
}

export default UsePreventLeaveExample;