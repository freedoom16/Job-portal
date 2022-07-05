import React, { useEffect, useState } from "react";
import {db} from '../firebaseConfig';

import {
    collection,
    getDocs,
    // addDoc,
    // updateDoc,
    // deleteDoc,
    // doc,
  } from "firebase/firestore";

export default function Data(){
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "user");

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, );
    
    return(
        <div>
            {users.map((user) => {
                return (
                <div>
                    {" "}
                    <h1>First Name: {user.firstName}</h1>
                    <h1>Last Name: {user.lastName}</h1>
                    <h1>Email: {user.email}</h1>
                    <h1>Password: {user.password}</h1>
                </div>
                );
            })}
        </div>
    );
}