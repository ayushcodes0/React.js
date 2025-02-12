import React from 'react'
import { createContext, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({children})=>{
    const [user, setUser] = useState({name: "Ayush"});
    const updateName = (newName)=>{
        setUser(newName);
    }
    return <useContext.Provider value = {{user, updateName}}>
        {children}
    </useContext.Provider>
}




export {UserProvider, UserContext};
