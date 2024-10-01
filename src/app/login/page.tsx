"use client"
import Link from "next/link"
import { useState } from "react"
import { SignIn } from "../firebase/firebaseauth"
import Button from "@mui/material/Button"



export default function Login(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    
    const signIn = (email:string,password:string)=>{
      SignIn(email,password)
    }
    
    return(
        <>
        
        
<div className="max-w-sm mx-auto"  style={{margin: '0 auto' ,position: 'relative',top: '130px'}}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your password" required />
  </div>

 
  
  <Button onClick={()=>{signIn(email,password)}} variant="contained">login</Button>
  <Link href={'./signup'} style={{color: 'blue',margin: '5px'}}>creat new Account</Link>

</div>

        </>
    )
}