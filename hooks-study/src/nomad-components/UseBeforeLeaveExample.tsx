import React, {  } from "react";


function UseBeforeLeaveExample () {

    const preventLeave = (event: BeforeUnloadEvent) => {
        event.preventDefault();
        event.returnValue = '';
    }

    window.addEventListener('beforeunload', preventLeave);

    return (
        <>
            No way !
        </>
    )
}

export default UseBeforeLeaveExample;