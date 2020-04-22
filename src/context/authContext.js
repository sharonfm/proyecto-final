import React, { createContext, useState, useEffect } from "react";
import { auth, generateUserDocument } from "../services/firebase";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      setUser(user)
      console.log(user)
    });
  }, []);
  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;