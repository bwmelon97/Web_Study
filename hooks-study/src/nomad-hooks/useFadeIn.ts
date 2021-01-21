import { useEffect, useRef } from "react";


type TransitionStyle = {
    duration?: number;
    delay?: number;
}

const defaultTransitionStyle: TransitionStyle = {
    duration: 1, delay: 0
}

function useFadeIn <T extends HTMLElement> (
    {
        duration = 1,
        delay = 0
    }: TransitionStyle = defaultTransitionStyle
) {

    const HTMLEl = useRef<T>(null);
    
    useEffect(() => {
        if (HTMLEl.current) {
            HTMLEl.current.style.opacity = '1';
            HTMLEl.current.style.transition = `opacity ${duration}s ${delay}s`;
        }
    }, [duration, delay])

    return HTMLEl;
}

export default useFadeIn;