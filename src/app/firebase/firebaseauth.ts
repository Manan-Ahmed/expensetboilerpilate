import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseconfig";
import { saveUser } from "./firebasefirestore";


import {  signOut } from "firebase/auth";

export const auth = getAuth(app);
export default function Signup(email:any, password:any){

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user creat',user);
    const {email,uid} = userCredential.user
       saveUser({email: email as string,uid})

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    // ..
  });
}




export function SignIn(email:any, password:any){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user login',user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


export  function LogOut(){

// const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  console.log('logout')
}).catch((error) => {
  // An error happened.
});
}