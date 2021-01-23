import { useEffect, useState } from "react";


function useScrollY () {
    
    /* Scroll_Y : 스크롤바가 위치한 값 */
    const [scrollY, setScrollY] = useState<number>(window.scrollY);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    /* 브라우저 창의 높이 값 */
    const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);
    useEffect(() => {
        const handleResize = () => setInnerHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return {
        scrollY, innerHeight
    }
}

export default useScrollY;