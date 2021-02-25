import { useEffect, useRef, useState } from "react";


function useFullScreen <T extends HTMLElement> () {

    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const element = useRef<T>(null);
    const triggerFullScreen = () => {
        element.current?.requestFullscreen();
        setIsFullScreen(true);
    }
    const exitFullScreen = () => {
        document.exitFullscreen();
        setIsFullScreen(false);
    }

    useEffect(() => {
        const handleFullScreenEvt = () => setIsFullScreen(document.fullscreenElement !== null)
        document.addEventListener('fullscreenchange', handleFullScreenEvt);
        return () =>  {
            document.removeEventListener('fullscreenchange', handleFullScreenEvt);
        }
    }, [])
    

    return { element, isFullScreen, triggerFullScreen, exitFullScreen }
}

export default useFullScreen