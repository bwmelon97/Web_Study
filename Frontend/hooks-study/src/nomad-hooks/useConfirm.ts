type UseConfirmArgs = {
    message:    string;
    onConfirm:  () => any;
    onCancle?:  () => any;
}

function useConfirm ({
    message,
    onConfirm,
    onCancle
}: UseConfirmArgs) {

    const confirmAction = () => {
        if ( window.confirm(message) ) {
            onConfirm();
        }
        else {
            onCancle ? onCancle() : console.log('취소 액션이 없습니다.') ;
        }
    }

    return confirmAction;
}

export default useConfirm;