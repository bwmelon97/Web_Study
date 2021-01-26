import { useCallback, useEffect, useRef, useState } from "react";


function useScrollY <T extends HTMLElement> (
    kind: 'window' | 'component' = 'window'
) {
    
    const isWindow = kind === 'window';
    const element = useRef<T>(null);

    /* Scroll_Y : 스크롤바가 위치한 값 */
    const getScrollY = useCallback(() => isWindow ? window.scrollY : element.current?.scrollTop, [isWindow]) 
    const [scrollY, setScrollY] = useState<number>(getScrollY() as number);
    useEffect(() => {
        const handleScroll = () => setScrollY(getScrollY() as number) ;
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [getScrollY])

    /* 브라우저 창의 높이 값 | 오브젝트의 보여지는 부분의 높이 값 */
    const getInnerHeight = useCallback(() => isWindow ? window.innerHeight : element.current?.clientHeight, [isWindow]) 
    const [innerHeight, setInnerHeight] = useState<number>(getInnerHeight() as number);
    useEffect(() => {
        const handleResize = () => setInnerHeight(getInnerHeight() as number);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [getInnerHeight])

    /* 전체 Body의 높이 값 | 오브젝트의 전체 높이 값 */
    const getScrollHeight = useCallback(() => isWindow ? document.body.scrollHeight : element.current?.scrollHeight, [isWindow]) 
    const [scrollHeight, setScrollHeight] = useState<number>(getScrollHeight() as number);
    // eslint-disable-next-line
    useEffect(() => setScrollHeight(getScrollHeight() as number))

    return {
        element,
        scrollY, innerHeight, scrollHeight
    }
}

export default useScrollY;