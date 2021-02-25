import { useEffect, useState } from "react";


function useNetwork (onChange?: (isOnline: boolean) => void) {

    const [status, setStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleChange = () => {
            if (onChange) { onChange(navigator.onLine); }
            setStatus(navigator.onLine);
        }

        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);

        return () => {
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        }
    }, [onChange])

    return status;
}

export default useNetwork;