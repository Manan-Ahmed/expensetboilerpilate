"use client"
import { collection, query, where, onSnapshot, DocumentData, Unsubscribe, getDocs, updateDoc, getFirestore } from "firebase/firestore";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { table } from "console";
import { doc, deleteDoc } from "firebase/firestore";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { app } from "../firebase/firebaseconfig";
import { auth, LogOut } from "../firebase/firebaseauth";
import { UseAuthContext } from "../context/authcontext";
import { MdDelete, MdEdit } from "react-icons/md";
import AddBtn from "../component/addBtn";

export default function ExpenseList() {
  const [expList, setExpList] = useState<DocumentData[]>([])
  const [list, setList] = useState<DocumentData>()
  const { setId } = UseAuthContext()!
  const route = useRouter()
  const [loading, setLoading] = useState()

  const db = getFirestore(app);



  useEffect(() => {
    let detachListner = onAuthStateChanged(auth, (user) => {
      if (user) {
        exp()


      }
    })

    return (() => {
      if (readExpenseRealTime) {
        readExpenseRealTime()
        console.log('component mount');
        detachListner()

      }
    })

  }, [])





  

  let readExpenseRealTime: Unsubscribe;




  const exp = async () => {

    const collectionRef = collection(db, 'expense')
    const currentUser = auth.currentUser?.uid

    const condition = where('userUid', '==', currentUser)
    const q = query(collectionRef, condition)

    readExpenseRealTime = onSnapshot(q, (snapShot) => {
      let expenseListClone = []
       snapShot.forEach((change)=>{
        let exp = change.data()
        exp.id = change.id
        expenseListClone.push(exp)
        setExpList(expenseListClone)
        
       })
  }) 
      
  
  }

  

  const delt = async (id: string) => {
    const db = getFirestore(app);

    await deleteDoc(doc(db, "expense", id));
    console.log('add id', id);

  }

  const update = (id: string) => {
    route.push(`./Home/${id}`)


  }



  return (
    <>
      <h1 style={{padding: '5px',margin: '5px',textAlign: 'center'}}>Expense List</h1>

    {
      expList.length > 0 ?
      <div style={{margin: '30px'}}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  min-w-50	min-width: 10rem;" >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Note
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only" >Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>



            {
              expList &&
                expList.map(({id,title,category,node,amount,date}, ind) => (

                  <tr key={ind} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {title}
                    </th>
                    <td className="px-6 py-4">{category}</td>
                    <td className="px-6 py-4">{node}</td>
                    <td className="px-6 py-4">{amount}</td>
                    <td className="px-6 py-4">{new Date(date).toLocaleDateString()} </td>

                    <td className="px-6 py-4 text-right">
                     
                        <MdEdit  onClick={() => { update(id) }}/>
                   
                    </td>
                    <td className="px-6 py-4 text-right">
                    
                        
                       
                        <MdDelete  onClick={() => { delt(id) }} />
                      
                    </td>
                  </tr>

                ))


            }


          </tbody>
        </table>
      </div>
      </div>
      
      : <><div style={{textAlign: 'center'}}>Expense not available</div></>

    }
    
    <AddBtn />


    </>

  )
}



