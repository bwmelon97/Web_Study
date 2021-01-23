import { useEffect, useState } from "react";


function useScrollY () {
    
    const [scrollY, setScrollY] = useState<number>(window.scrollY);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return {
        scrollY
    }
}

export default useScrollY;