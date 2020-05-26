import React, { createContext, useState, useEffect } from "react";
import { generateUserDocument } from "../services/firebase";

export const statContext = createContext({ user: null });

const StatProvider = (props) => {
  const [data, setData] = useState(null);
    


  return (
    <statContext.Provider value={user}>
      {props.children}
    </statContext.Provider>
  );
};
export default StatProvider;