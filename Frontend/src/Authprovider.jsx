import { useState , useContext, createContext} from "react"

// create the Context
const AuthContext = createContext(); 

const Authprovider = ({children}) =>{
        const [isloggedIn, setIsloggedIN ] = useState(
            !!localStorage.getItem('accessToken')
        )
    return(
        <AuthContext.Provider value={{isloggedIn,setIsloggedIN}}>
            {children}
        </AuthContext.Provider>
    )
}

export default Authprovider
export {AuthContext};