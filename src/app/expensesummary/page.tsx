"use client"

import { collection, DocumentData, getFirestore, onSnapshot, query, Unsubscribe, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { app } from "../firebase/firebaseconfig";
import { auth } from "../firebase/firebaseauth";
import { onAuthStateChanged } from "firebase/auth";

export default function ExpenseSummary(){
    const [expSummary,setExpSummary] = useState<DocumentData[]>([])
    const db = getFirestore(app);

useEffect(()=>{
      const detachListner = onAuthStateChanged(auth,(user)=>{
if(user){
  fetch()
   
}

return(()=>{
if(readExpenseRealTime){
    readExpenseRealTime()
    detachListner()
    console.log('mount');
    
}
})
           })

},[])


let readExpenseRealTime: Unsubscribe;

const fetch = ()=>{


  let summaryClone = [...expSummary]


const collectionRef = collection(db, 'expense')
const currentUser = auth.currentUser?.uid

let condition = where('userUid', '==', currentUser)
const q = query(collectionRef, condition)

readExpenseRealTime = onSnapshot(q, (snapShot) => {
     snapShot.docChanges().forEach((change)=>{

      let exp = change.doc.data()
      exp.id = change.doc.id
  summaryClone.push(exp)
  setExpSummary([...summaryClone])
  
console.log(exp);



    })






})
}

    return(
        <>
      
      {
expSummary.length > 0 ?   
<div style={{position: 'relative',top: '60px'}}>
<h1 style={{textAlign: 'center'}}>Expense Summary</h1>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg"
style={{width: '60%',margin: 'auto',marginTop: '30px'}}>
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>

     
      <th scope="col" className="px-4 py-3">
        Category
      </th>
      <th scope="col" className="px-4 py-3">
        Amount
      </th>
    
     
    </tr>
  </thead>
  <tbody> 
  
  {
expSummary &&   expSummary.map(({category,amount,id})=>(
      <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {category}
            </th>
            <td className="px-4 py-4">{amount}</td>

            </tr> 
))



}


  </tbody>
</table>
</div>
</div>

:
<div style={{textAlign: 'center'}}>expense not available</div>
      }
        
      

  
      


     

        
        </>
    )
}