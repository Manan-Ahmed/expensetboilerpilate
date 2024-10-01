





"use client"

import { auth } from "@/app/firebase/firebaseauth";
import { app } from "@/app/firebase/firebaseconfig";
import TextArea from "antd/es/input/TextArea";
import { doc, getFirestore, onSnapshot, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "antd/es/button"



type ParamType = {
    params: { id: string };
  };
  
  export default function Edit({ params: { id } }: ParamType) {
    
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [category,setCategory] = useState('')
    const [node,setNode] = useState('')
    const route = useRouter()

    const db = getFirestore(app);




    type UpadateType = {
      title: string,
      amount: string,
      category:string,
      node:string
    }
    


useEffect(()=>{
const docRef = doc(db,'expense',id)

const unsubscribe = onSnapshot(docRef, (doc) => {
    let data = doc.data()
    if(data){
      setTitle(data.title || '')
      setAmount(data.amount || '')
      setCategory(data.category || '')
      setNode(data.node || '')
    }
  });
  return(()=>{
    unsubscribe()
  })
},[id])


async function Update(){
  let uid = auth.currentUser?.uid
    const docRef = doc(db, "expense", id)
    console.log();
 
     await updateDoc(docRef, {
      userUid: uid,
      date: new Date().toISOString(),
      title:title,
      amount:amount,
      category: category,
      node:node

    });


// try{
//     await updateDoc(docRef, {
//         title: updateExp.title,
//         amount: updateExp.amount,
//         category: updateExp.category,
//         node: updateExp.node,
//         // uid: currentUser
//         date: new Date().toISOString

    // import { doc, updateDoc } from "firebase/firestore";

    // const washingtonRef = doc(db, "cities", "DC");
    
    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //   capital: true
    // });
//     })
// }
// catch{
//     console.log('not');
    
// }
}

 



return(
    <>
    
         <div  style={{border: '1px solid black',margin: ' 0 auto',width: '50%',marginTop: '25px'}}>
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

<div className="mb-6" >
  <label
    htmlFor="default-input"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Title
  </label>
  <input
    type="text"
    value={amount}
    onChange={(e)=>{setAmount(e.target.value)}}
    placeholder="enter your tittle"
    id="default-input"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
</div>
      
<div>
      select your category <select name="" id="" value={category} onChange={(e)=>{setCategory(e.target.value)}} >
      <option >check</option>

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
      value={node}
      onChange={(e)=>{setNode(e.target.value)}}
      placeholder={node}
      // style={{ height: 120, resize: 'none' }}
    />

      
<div style={{margin: '5px'}}>
                <Button onClick={Update} color="primary" variant="solid">
            update
          </Button>
                </div>       
                </div>       

    </>
)  

}
// import { useEffect, useState } from "react"
// import { saveExpense } from "../firebase/firebasefirestore"
// import Link from "next/link"
// import { UseAuthContext } from "../context/authcontext"
// import {  getFirestore, updateDoc } from "firebase/firestore"
// import { app } from "../firebase/firebaseconfig"
// import { auth } from "../firebase/firebaseauth"
// import { useRouter } from "next/navigation";
// import {doc,  onSnapshot } from "firebase/firestore";

// type ParamType = {
//     params : {id: string}
// }
// export default function Params({param:{id}}){
//     const {index} = UseAuthContext()!

//     const [title,setTitle] = useState('')
//     const [amount,setAmount] = useState('')
//     const [category,setCategory] = useState('')
//     const [node,setNode] = useState('')
//     const route = useRouter()

//     const db = getFirestore(app);


// useEffect(()=>{
// const docRef = doc(db,'expense',index)

// const unsubscribe = onSnapshot(docRef, (doc) => {
//     let data = doc.data()
//     if(data){
//       setTitle(data.title || '')
//       setAmount(data.amount || '')
//       setCategory(data.category || '')
//       setNode(data.node || '')
//     }
//   });
//   return(()=>{
//     unsubscribe()
//   })
// },[index])








//     const save = ()=>{
      
//           edit({title,amount,category,node})     
//      route.push('./expenselist')
//     }


//     const edit = async(updateExp:any)=>{
// console.log(updateExp);

// //   const collectionRef = doc(db, "expense", index);

// // await updateDoc(collectionRef, {
// //      updateExp
// // })


// } 

//     return(
//         <>
        
//            <h1>hello homes</h1>
// <Link href={'./expenselist'}>ExpenseList</Link>

//            <div>
//             <input type="text" placeholder="tittle" value={title} onChange={(e)=>{setTitle(e.target.value)}} style={{border: '1px solid black'}} />
//             <br />

//             <input type="text" name="" id="" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="price" style={{border: '1px solid black'}}/>
          
               
          
//            </div>
// <div>
//       select your category <select name="" id="" value={category} onChange={(e)=>{setCategory(e.target.value)}} >
//       <option >check</option>

//     <option >Food</option>
//     <option >Transpot</option>
//     <option >Bills</option>
//     <option >education</option>
//     <option >investment</option>
//     <option >Luxuries</option>
//     <option >others</option>

//     </select>

// </div>
// <div>
//     <textarea  placeholder="enter your note" value={node}  onChange={(e)=>{setNode(e.target.value)}}></textarea>
// </div>
//       <button onClick={save}>update</button>     
//         </>
//     )
// }


