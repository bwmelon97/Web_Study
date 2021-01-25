import { useCallback, useEffect, useRef, useState } from "react";


function useScrollY <T extends HTMLElement> (
    kind: 'window' | 'component' = 'window'
) {
    
    const isWindow = kind === 'window';
    const element = useRef<T>(null);

    const DOMElement = element.current;
    console.log('[useScroll] ' + DOMElement?.clientHeight )

    /* Scroll_Y : 스크롤바가 위치한 값 */
    const getScrollY = useCallback(() => isWindow ? window.scrollY : 
                                                    DOMElement? DOMElement.scrollTop : 0, [DOMElement, isWindow]) 
    const [scrollY, setScrollY] = useState<number>(getScrollY());
    useEffect(() => {
        const handleScroll = () => setScrollY(getScrollY()) ;
        if (isWindow)   { window.addEventListener('scroll', handleScroll); }
        else            { DOMElement?.addEventListener('scroll', handleScroll); }
        return () => {
            if (isWindow)   { window.removeEventListener('scroll', handleScroll); }
            else            { DOMElement?.removeEventListener('scroll', handleScroll); }
        }
    }, [DOMElement, isWindow, getScrollY])

    /* 브라우저 창의 높이 값 | 오브젝트의 보여지는 부분의 높이 값 */
    const getInnerHeight = useCallback(() => isWindow ? window.innerHeight : element.current?.clientHeight, [isWindow]) 
    const [innerHeight, setInnerHeight] = useState<number>(getInnerHeight() as number);
    useEffect(() => {
        console.log('[getInnerHeight] ' + DOMElement?.clientHeight )
        setInnerHeight(getInnerHeight() as number);
        const handleResize = () => setInnerHeight(getInnerHeight() as number);
        if (isWindow) window.addEventListener('resize', handleResize);
        return () => {
            if (isWindow) window.removeEventListener('resize', handleResize);
        }
    }, [isWindow, getInnerHeight, DOMElement?.clientHeight])

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