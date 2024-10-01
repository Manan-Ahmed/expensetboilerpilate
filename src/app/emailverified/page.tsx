"use client"
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { collection, query, where, onSnapshot, getFirestore, Unsubscribe } from "firebase/firestore";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UseAuthContext } from "../context/authcontext";
import { app } from "../firebase/firebaseconfig";

export default function Email(){
const route = useRouter()
  const {user} = UseAuthContext()!
  const db = getFirestore(app);


useEffect(()=>{
    console.log(user.emailVerified);
    
})
if(user.emailVerified){
     route.push('/homes')

}
else{
  console.log('user is not exist');
  
}


// useEffect(()=>{
// if(realTimeUsers){
//     realTimeUsers()
// }
// })


// let realTimeUsers: Unsubscribe;
// let collectionRef = collection(db,'users')

// let currentUser = auth.currentUser?.uid
// let condition = where('uid','==',currentUser)
// let q = query(collectionRef,condition)

// realTimeUsers = onSnapshot(q,(snapshot)=>{
//   snapshot.docChanges().forEach((change)=>{
//     if(change.type === 'added'){
//         //  let user = change.doc.data()
//         //  user.uid = change.doc.id
//         console.log(change.doc.data(),'added');
        
//     }
//     if(change.type === 'modified'){
//        route.push('/home')
//        console.log(change.type);
       
//     }
//   })
// })



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


{/* <a
  href="#"
  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Read more
  <svg
    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
</a> */}