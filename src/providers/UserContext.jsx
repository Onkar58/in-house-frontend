import { createContext, useContext, useState } from "react";
import { auth } from "../utils/firebaseConfig";

const UserContext = createContext()


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    auth.onAuthStateChanged(user => {
        if (user) {
            setUser(user)
        }
    })
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserAuth = () => useContext(UserContext)

