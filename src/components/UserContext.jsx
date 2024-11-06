import React, { createContext, useState } from 'react'


const UserContext = createContext();
const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: "John Doe"});
    const UpdateUser = (newName) => {
        setUser({name: newName})
    }
    return <UserContext.Provider value={{user, UpdateUser}}>
        {children}
    </UserContext.Provider>
}

export {UserContext, UserProvider}