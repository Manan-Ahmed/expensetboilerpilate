import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc, getDocs, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { app } from "./firebaseconfig";
import { auth } from "./firebaseauth";
import {  query, where, onSnapshot } from "firebase/firestore";

const db = getFirestore(app);




type UserType = {
  email: string,
  uid: string
}

export async function saveUser(user:UserType){

  let docRef = doc(db,'users',user.uid)
     await setDoc(docRef,{
      user
     })

}


export async function saveExpense({title,amount,category,node}:any){
  let collectionRef = collection(db,'expense')
  let uid = auth.currentUser?.uid
 const docRef = await setDoc(doc(collectionRef), {
        userUid: uid,date: new Date().toISOString(),title,amount,category,node

  })
  console.log('docRefid==>',docRef);
 
}


export async function getExpense(){
let currentUser = auth.currentUser?.uid

let collectionRef = collection(db,'expense')
let condition = where('userUid','==',currentUser)

let q = query(collectionRef,condition)

let allExpenseSnapShot = await getDocs(q)
let allExp = allExpenseSnapShot.docs.map((expSnapShot)=>{
         let expense = expSnapShot.data()
         expense.id = expSnapShot.id
         console.log('doc',expSnapShot.id);
         return expense
         
})
  return allExp
}




// export function UpadateExpDb(updateExp:any){

//   const collectionRef = doc(db, "expense", index);

// await updateDoc(collectionRef, {
//      updateExp
// })


// } 
// }