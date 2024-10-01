"use client"

import { Stack, Button } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { collection, DocumentData, getFirestore, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import PieChart from "../component/pieChart";
import { auth } from "../firebase/firebaseauth";
import { app } from "../firebase/firebaseconfig";

// Define an interface for the dataset
interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
}

 interface UserData {
    labels: string[];
    datasets: Dataset[];
}


export default function Chart(){
  const db = getFirestore(app);

  const [expneces, setExpences] = useState<DocumentData[]>([]);
  const [userData, setUserData] = useState<UserData>({
      labels: [],
      datasets: [{
          label: "Categories expense per month",
          data: [],
          backgroundColor: ["green", "orange", "blue", "yellow", "purple", "pink"],
          borderWidth: 2,
      }]
  });

  useEffect(() => {
      console.log(expneces)
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              fetchExpences(); // Fetch expenses only if the user is authenticated
          }
          return () => unsubscribe(); // Cleanup the listener on unmount
      });
  }, []);

  const fetchExpences = () => {
    let collectionRef = collection(db, 'expense')
    let currentUser = auth.currentUser?.uid

    let condition = where('userUid', '==', currentUser)
    let q = query(collectionRef, condition)
     

      onSnapshot(q, (snapshot) => {
        console.log(snapshot)
          const updateExpence: DocumentData[] = [];
          snapshot.forEach((doc) => {
              const exp = { ...doc.data(), id: doc.id };
              updateExpence.push(exp);
              console.log(doc.data())
          });
          setExpences(updateExpence);

          // Update userData after setting expences
          setUserData({
              labels: updateExpence.map((data) => data.category || "Unknown"), // Use fallback for category
              datasets: [{
                  label: "Categories expense per month",
                  data: updateExpence.map((data) => data.amount || 0), // Use fallback for amount
                  backgroundColor: ["yellow", "orange", "blue", "green", "purple", "pink"], // Adjusted for more categories
                  borderWidth: 2,
              }]
          });
      });
  };

  return (
      <>
          <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}></div>
          {
              expneces.length > 0 ? (<div
                  style={{
                      width: "90%", // Use percentage width for responsiveness
                      maxWidth: "90%", // Maximum width to limit large screens
                      margin: "0 auto", // Center the chart
                  }}
              >
                  <PieChart charData={userData} />
              </div>) :
                  (<Stack style={{ width: "100%", textAlign: "center" }}>
                      <Button variant="text">No expenses available</Button>
                  </Stack>
                  )
          }

          <style jsx>{`
              @media (max-width: 768px) {
                  div {
                      width: 100%; // Full width on smaller screens
                      margin-left: 0; // Remove any margin that may cause issues on small screens
                  }
              }
          `}</style>



      </>
    
    
  )
}


























