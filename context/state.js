



import { createContext, useContext } from "react";
import React, { useState,useEffect } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {
    

    const [search, setSearch] = useState("hidden");
    const [panel, setPanel] = useState("panel");
    
    const [showBrowser, setShowBrowser] = useState("hidden");
    
    const [showFileEx, setShowFileEx] = useState("hidden");
  
    const [showCalculator, setShowCalculator] = useState("hidden");
  

  const value = { search, setSearch,showBrowser, setShowBrowser , panel, setPanel , showFileEx, setShowFileEx , showCalculator, setShowCalculator };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
