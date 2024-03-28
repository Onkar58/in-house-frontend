import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext()


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // setLoading(true)
        onAuthStateChanged(auth, () => {
            setUser(auth.currentUser)
        })
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    // console.log("userin contet", user);
    return (
        <UserContext.Provider value={{ user }}>
            {loading ?
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40" viewBox="0 0 200 200">
                    <circle fill="none" stroke="white" stroke-width="15" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center">
                        <animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite">
                        </animateTransform>
                    </circle>
                </svg> :
                children
            }
        </UserContext.Provider>
    )
}

export const useUserAuth = () => useContext(UserContext)

