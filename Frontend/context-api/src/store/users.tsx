import React, { ReactNode, createContext } from "react";

import { useGetReqAPI_User } from "../hooks/useGetReqAPI";

/* UserContext */
export type userType = {
    name: String;
    job: String;
}

export const defaultUser: userType = {
    name: '',
    job: '',
};

export const UserContext = createContext(defaultUser);


/* UserStore */
type UserStoreProps = {
    children: ReactNode;
}

function UserStore (props: UserStoreProps) {
    const { user } = useGetReqAPI_User();
    return (
        <UserContext.Provider value={user} >
            {props.children}
        </UserContext.Provider>
    )
}


export default UserStore;