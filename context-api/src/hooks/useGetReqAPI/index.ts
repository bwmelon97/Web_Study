import { useState, useEffect } from "react";

function useGetReqAPI<T> ( getDataReqest: () => Promise<T>, defaultData: T ) : {
    data: T, isLoading: boolean, isError: boolean
} {
    const [data, setData] = useState<T> (defaultData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const process = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const data = await getDataReqest();                
                setData(data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        }

        process();
    }, [getDataReqest])

    return {data, isLoading, isError};
}

export default useGetReqAPI;
export { default as useGetReqAPI_User } from './useGetReqApi_User'