import React, {createContext, useEffect, useState } from "react";
export const AuthContex = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const[loader,setLoader]=useState(true);

  // console.log(user)

  const createUser=(email,password)=>{
    setLoader(true)
  return  createUserWithEmailAndPassword(auth,email,password)
  }

  const loginUser=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut=()=>{
    setLoader(true)
    signOut(auth)
    // .then(console.log('signout successfully'))
    .catch(error=>{
        // console.log(error)
    })
  }

  const updateUser=(updateData)=>{
  return  updateProfile(auth.currentUser,updateData)
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoader(false)
    })
    return()=>{
        unsubscribe()
    }
  },[])

  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    loginUser,
    loader,
    updateUser,
    

  };

  return <AuthContex.Provider value={authInfo}>
    {children}
  </AuthContex.Provider>;
};

export default AuthProvider;
