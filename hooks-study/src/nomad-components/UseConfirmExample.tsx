import React, {  } from "react";


function UseConfirmExample () {

    const onClick = () => {
        if ( window.confirm('정말로 삭제하시겠습니까?') ) {
            console.log('hi')
        } 
        else {
            console.log('fail')
        }
    }

    return (
        <>
            <button onClick={onClick} >delete</button>
        </>
    )
}

export default UseConfirmExample