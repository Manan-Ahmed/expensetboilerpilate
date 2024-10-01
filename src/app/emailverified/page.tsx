"use client"

import {getFirestore } from "firebase/firestore";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UseAuthContext } from "../context/authcontext";
import { app } from "../firebase/firebaseconfig";

export default function Email(){
const route = useRouter()
  const {user} = UseAuthContext()!


useEffect(()=>{
    console.log(user.emailVerified);
    
})
if(user.emailVerified){
     route.push('/homes')

}
else{
  console.log('user is not exist');
  
}






    return(
        <>
             <h1>email verifi page</h1>
        

             <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
   
  </a>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
   please check your gmail and verified your email
  </p>

  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    send Email</button>
  
</div>

        </>
    )
}

