import { useEffect, useState } from "react";
import axios from "axios";


type AxiosOptions = {
    url: string;
}

type State = {
    loading: boolean,
    data: Object | null,
    error: Error | null
}

function useAxios ( { url }: AxiosOptions ) {

    const [state, setState] = useState<State>({
        loading: true,
        data: null,
        error: null
    });

    useEffect(() => {
        axios.get( url )
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
    }, [])

    return state;
}

export default useAxios;