import { ReactNode, useState } from "react";

export type Tabs = {
    title: string;
    content: ReactNode;
}

const useTabs = (
    initialIndex: number, 
    contents: Tabs[] 
) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    
    const CurrentContent = contents[currentIndex].content;
    const changeIndex = (index: number) => {
        if ( !Number.isInteger(index) || index < 0 || index >= contents.length )
            return;
        setCurrentIndex(index);
    }

    return {
        CurrentContent,
        changeIndex
    }
}

export default useTabs;