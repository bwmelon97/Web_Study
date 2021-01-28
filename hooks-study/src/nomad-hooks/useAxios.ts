import { useEffect, useState, useRef } from "react";
import axios, { AxiosRequestConfig } from "axios";


function useAxios<T extends object> ( config: AxiosRequestConfig ) {
    
    type State = {
        loading: boolean,
        data: T | null,
        error: Error | null
    }

    const [state, setState] = useState<State>({
        loading: true,
        data: null,
        error: null
    });

    const configRef = useRef(config);

    useEffect(() => {
        const { method } = configRef.current;

        switch ( method ) {
            case 'post': case 'POST':
                axios(configRef.current);
                break;
                
            case 'GET': case 'get': default:
                axios(configRef.current)
                .then((res) => {
                    setState( s => {
                        return {
                            ...s,
                            loading: false,
                            data: res.data
                        }
                    })
                })
                .catch((error) => {
                    setState( s => {
                        return {
                            ...s,
                            loading: false,
                            error
                        }
                    })
                })
        }
    }, [])

    return state;
}

export default useAxios;