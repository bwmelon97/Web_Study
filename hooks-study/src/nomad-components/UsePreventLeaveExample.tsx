import React, {  } from "react";
import { usePreventLeave } from "../nomad-hooks";


function UsePreventLeaveExample () {

    const { lockLeaving, unLockLeaving } = usePreventLeave();

    return (
        <>
            No way !
            <button onClick={lockLeaving} > 잠금 </button>
            <button onClick={unLockLeaving} > 해제 </button>
        </>
    )
}

export default UsePreventLeaveExample;