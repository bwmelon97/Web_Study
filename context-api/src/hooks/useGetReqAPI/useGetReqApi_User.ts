

import { userType, defaultUser } from "../../store/users";
import useGetReqAPI from "./index";

async function getUserDataReqest (): Promise<userType> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'soogeun',
                job: 'developer'
            })
        }, 1000);
    })
}

function useGetReqAPI_User(): {
    user: userType, isLoading: boolean, isError: boolean
} {
    const { data: user, isLoading, isError } = useGetReqAPI<userType> (getUserDataReqest, defaultUser);
    return { user, isLoading, isError };
}

export default useGetReqAPI_User;