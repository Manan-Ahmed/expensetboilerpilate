"use client"

import Link from "next/link"
import { MdOutlineAddCircle } from "react-icons/md"
export default function AddBtn(){
   
    return(
        <>
        
        <div style={{textAlign: 'center'}} >

        <Link href={"/expenseadd"} >
        <button  style={{position: 'fixed',bottom: '60px'}}><MdOutlineAddCircle size={40} />
        </button>
        </Link>
        </div>
        </>
    )
}