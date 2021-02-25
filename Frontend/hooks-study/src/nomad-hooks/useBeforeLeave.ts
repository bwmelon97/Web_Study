import { useEffect } from "react";


function useBeforeLeave (
    onBefore: () => any
) {
    useEffect( () => {
        const handleLeave = (event: MouseEvent) => {
            if (event.clientY <= 0) { onBefore(); } 
        }

        document.addEventListener('mouseleave', handleLeave);

        return () => {
            document.removeEventListener('mouseleave', handleLeave);
        }
    }, [onBefore])
}

export default useBeforeLeave;