"use client"
import { getAuth, onAuthStateChanged, sendEmailVerification, signOut } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { createContext,ReactNode,useContext, useEffect, useState } from "react";
import { json } from "stream/consumers";
import { app } from "../firebase/firebaseconfig";


type userType = {
    email: string | null,
    uid: string,
    emailVerified: boolean |null,
    // verify: boolean | null
   
}


type AuthContextType = {
   user: userType | any
id:   string | any
setId: string | any

 
}

const AuthContext = createContext<AuthContextType | null>(null)


export default function AuthContextProvider({children}: {children: ReactNode}){
const route = useRouter()
const [user,setUser] = useState<userType | null>(null)

const [id,setId] = useState<string | null>(null)

const db = getFirestore(app);

useEffect(()=>{
    const auth = getAuth(app);

    onAuthStateChanged(auth, (logInUser) => {
        
      if (logInUser) {
        const {email,uid,emailVerified} = logInUser
setUser({email,uid,emailVerified})
console.log(emailVerified);
// if(emailVerified === true){
  route.push('/homes')
// }else{
//   sendEmailVerification(logInUser)
//   .then(() => {
   
//     console.log('email sent',logInUser);
//     route.push('/emailverified')

    
//   }).catch(()=>{
// console.log('Email verification not sent');

//   })

 
// }



        
      } else {
        console.log('user is not login');
        setUser(null)
route.push('/')
      }
    });
   


},[])
 




    return(

      <AuthContext.Provider value={{user,id,setId}}>
{children}
</AuthContext.Provider>

)

}

export const UseAuthContext = ()=>useContext(AuthContext)