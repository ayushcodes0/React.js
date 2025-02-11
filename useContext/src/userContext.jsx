import React from 'react'
import { createContext, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({children})=>{
    const [user, setUser] = useState({name: "Ayush"});
    const updateName = (newName)=>{
        setUser(newName);
    }
    return <userContext.Provider value = {{user, updateName}}>
        {children}
    </userContext.Provider>
}

export {UserProvider, UserContext} ;
