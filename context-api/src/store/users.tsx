import React, { ReactNode, createContext } from "react";


const getUserDataReqest = (): userType => {
    return {
        name: 'soogeun',
        job: 'developer'
    }
}

/* UserContext */
type userType = {
    name: String;
    job: String;
}

const defaultUser: userType = {
    name: '',
    job: '',
};

export const UserContext = createContext(defaultUser);


/* UserStore */
type UserStoreProps = {
    children: ReactNode;
}

function UserStore (props: UserStoreProps) {
    const user: userType = getUserDataReqest();
    return (
        <UserContext.Provider value={user} >
            {props.children}
        </UserContext.Provider>
    )
}


export default UserStore;