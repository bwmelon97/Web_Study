import React, {  } from "react";
import useConfirm from "../nomad-hooks/useConfirm";


function UseConfirmExample () {

    const message = '정말로 삭제하시겠습니까?';
    const onConfirm = () => { console.log('삭제') }
    const onCancle = () => { console.log('취소') }

    const onClick = useConfirm({ message, onConfirm, onCancle })

    return (
        <>
            <button onClick={onClick} >delete</button>
        </>
    )
}

export default UseConfirmExample