"use client"
import Link from "next/link"
import { useState } from "react"
import Signup from "../firebase/firebaseauth"
import Button from "@mui/material/Button"


export default function SignUp(){
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')


const signup = (email:any,password:any)=>{
  Signup(email,password)
}

    return(
        <>
        

<div className="max-w-sm mx-auto " 
style={{margin: '0 auto',position: 'relative',top: '140px'}} >
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your password" required />
  </div>
  <Button onClick={()=>{signup(email,password)}} variant="contained">login</Button>
  {/* <button onClick={()=>{signup(email,password)}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button> */}
  <Link href={'/login'} style={{color: 'blue',margin: '5px'}}>already have an account login here</Link>
  {/* <button type="button" onClick={forget} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    ForgetPassword</button> */}

</div>
        
        
        </>
    )
}