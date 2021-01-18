import React, {  } from "react";
import useBeforeLeave from "../nomad-hooks/useBeforeLeave";


function UseBeforeLeaveExample () {

    const { lockLeaving, unLockLeaving } = useBeforeLeave();

    return (
        <>
            No way !
            <button onClick={lockLeaving} > 잠금 </button>
            <button onClick={unLockLeaving} > 해제 </button>
        </>
    )
}

export default UseBeforeLeaveExample;