import { getFirestore,collection, getDocs, doc, setDoc } from "firebase/firestore";
import { app } from "./firebaseconfig";
import { auth } from "./firebaseauth";
import {  query, where } from "firebase/firestore";

const db = getFirestore(app);




type UserType = {
  email: string,
  uid: string
}

export async function saveUser(user:UserType){

  const docRef = doc(db,'users',user.uid)
     await setDoc(docRef,{
      user
     })

}

type ExpenseType={
  title: string,
  amount: string,
  category: string,
  node: string
}

export async function saveExpense({title,amount,category,node}:ExpenseType){
  const collectionRef = collection(db,'expense')
  const uid = auth.currentUser?.uid
 const docRef = await setDoc(doc(collectionRef), {
        userUid: uid,date: new Date().toISOString(),title,amount,category,node

  })
  console.log('docRefid==>',docRef);
 
}


export async function getExpense(){
  const currentUser = auth.currentUser?.uid

const collectionRef = collection(db,'expense')
const condition = where('userUid','==',currentUser)

const q = query(collectionRef,condition)

const allExpenseSnapShot = await getDocs(q)
const allExp = allExpenseSnapShot.docs.map((expSnapShot)=>{
         const expense = expSnapShot.data()
         expense.id = expSnapShot.id
         console.log('doc',expSnapShot.id);
         return expense
         
})
  return allExp
}




