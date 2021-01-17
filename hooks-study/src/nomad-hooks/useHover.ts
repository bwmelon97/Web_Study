import { useEffect, useRef } from "react";


function useHover<T extends HTMLElement> (
    onHover: EventListener      // (evt: Event) => void;
) {

    const ElRef = useRef<T>(null);
    
    useEffect(() => {
        const htmlEl = ElRef.current;
        if (htmlEl) {
            htmlEl.addEventListener('mouseover', onHover);
        }

        return () => {
            if (htmlEl) {
                htmlEl.removeEventListener('mouseover', onHover);
            }
        }
    }, [onHover])

    return { ElRef }
}

export default useHover;
