import { useContext, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showContext, setShowContext] = useState("CONTEXT CONNECTED");
  const [display, setDisplay] = useState("");
  const [expandedControls, setExpandedControls] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        showContext,
        setShowContext,
        display,
        setDisplay,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
