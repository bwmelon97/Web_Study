import { useEffect, useState, useRef } from "react";
import axios, { AxiosRequestConfig } from "axios";


function useAxios<T extends object> ( config: AxiosRequestConfig ) {
    
    type State = {
        loading: boolean,
        data: T | null,
        error: Error | null
    }

    const initialState: State = {
        loading: true,
        data: null,
        error: null,
    }

    const [state, setState] = useState<State>(initialState);

    const [fetchToken, setFetchToken] = useState<number>(0)
    const reFetch = () => setFetchToken(t => t + 1);

    const initialStateRef = useRef(initialState);
    const configRef = useRef(config);
    useEffect(() => {
        const { method } = configRef.current;

        switch ( method ) {
            case 'post': case 'POST':
                axios(configRef.current);
                break;
                
            case 'GET': case 'get': default:
                setState( {...initialStateRef.current} )    // 필요할까 ?

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
    }, [fetchToken])

    return { ...state, reFetch };
}

export default useAxios;