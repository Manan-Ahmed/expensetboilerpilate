


"use client"

import { useState } from "react"
import { saveExpense } from "../firebase/firebasefirestore"
import Link from "next/link"
import TextArea from "antd/es/input/TextArea"
import Button from "antd/es/button"


export default function Homes() {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [text, setText] = useState('')

    const save = () => {
        let exp = {
            title: title,
            amount: amount,
            category: category,
            node: text,
        }
        setTitle('')
        setAmount('')
        setCategory('')
        setText('')
        console.log(exp);
        saveExpense(exp)
    }

    return (
        <>

            {/* <Link href={'./expenselist'}>ExpenseList</Link> */}

            <h1 style={{textAlign: 'center',padding: '5px',margin: '5px',fontFamily: 'sans-serif'}}>Expense Tracker</h1>

<div  style={{margin: ' 0 auto',width: '50%',marginTop: '25px'}}>
       <div className="mb-6" >
  <label
    htmlFor="default-input"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Title
  </label>
  <input
    type="text"
    value={title}
    onChange={(e)=>{setTitle(e.target.value)}}
    placeholder="enter your tittle"
    id="default-input"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
</div>

<div className="mb-6"  >
  <label
    htmlFor="default-input"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Amount
  </label>
  <input
    type="text"
    value={amount}
    onChange={(e)=>{setAmount(e.target.value)}}
    placeholder="enter your Amount"
    id="default-input"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
</div>


                 <div style={{marginBottom: '10px'}}     
                 >
                  <label
    htmlFor="default-input"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Category
  </label>
  
                     <select
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     name="" id="" value={category} onChange={(e) => { setCategory(e.target.value) }} >
                        select your category<option></option>
                        <option >Food</option>
                        <option >Transpot</option>
                        <option >Bills</option>
                        <option >education</option>
                        <option >investment</option>
                        <option >Luxuries</option>
                        <option >others</option>

                    </select>
                    
                </div> 
        

               
                <TextArea
                style={{height: 120, resize: 'none',marginBottom: '10px' }}
      showCount
      maxLength={100}
      value={text}
      onChange={(e)=>{setText(e.target.value)}}
      placeholder="enter your node"
    />



                <div style={{margin: '5px'}}>
                <Button onClick={save} color="primary" variant="solid">
            Save
          </Button>
                </div>
          </div>
        </>
    )
}


