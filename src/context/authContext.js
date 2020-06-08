import React, { createContext, useState, useEffect } from "react";
import { auth, generateUserDocument } from "../services/firebase";

export const UserContext = createContext({ user: null });


const UserProvider = (props) => {

  const [loading,setLoading] = useState(true)

  const [user, setUser] = useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // useEffect(() => {
  //   const unSuscribed = auth.onAuthStateChanged(async (userAuth) => {
  //     //if(userAuth) {
  //       const user = await generateUserDocument(userAuth);
  //       setUser(user)
  //       setLoading(false)
  //     //}else {
  //       //setUser(null)
  //       setLoading(false)
  //     //}    
      
  //   });
  //   return () => unSuscribed()
  // }, []);
  return (
    <UserContext.Provider value={{user,loading}}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;