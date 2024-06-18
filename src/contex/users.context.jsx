import { createContext,useState, useEffect } from "react";
import { onAuthStateChangedlistener,CreateUserDocumentFromAuth } from "../utlis/firebase/firebase.utils";


export const Usercontext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
   const value = {currentUser,setCurrentUser}

   
   useEffect( () => {
    const unsubscribe = onAuthStateChangedlistener((user)=>{
        if(user){
            CreateUserDocumentFromAuth(user);
        }
        setCurrentUser(user);    
    } );
    return unsubscribe;  
 },[])

    return <Usercontext.Provider value={value}>{children}</Usercontext.Provider>

}