import { useEffect, useState } from "react";


const useTitle = (initialTitle: string) => {
    const [ title, setTitle ] = useState(initialTitle);

    const changeTitle = () => {
        const HTMLTitle = document.querySelector('title');
        if ( HTMLTitle ) { HTMLTitle.innerText = title; }
    }

    useEffect(changeTitle, [title]);

    return setTitle;
}

export default useTitle;