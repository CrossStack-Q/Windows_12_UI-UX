



import { createContext, useContext } from "react";
import React, { useState,useEffect } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {
    

    const [search, setSearch] = useState("hidden");
    
    const [showBrowser, setShowBrowser] = useState("hidden");
  

  

  const value = { search, setSearch,showBrowser, setShowBrowser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
