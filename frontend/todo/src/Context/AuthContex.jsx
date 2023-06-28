import { createContext, useState } from "react";


export const AuthContext=createContext()

function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=useState(false);

    function logOut(){
        setIsAuth(false)
    }
    return(
        <AuthContext.Provider value={{isAuth,setIsAuth,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider