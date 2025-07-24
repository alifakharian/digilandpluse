import { createContext, useContext } from "react";

const Contextdarkmode = createContext();

const useSampelcontextcode = () => {
  return useContext(Contextdarkmode);
};

const Sampelcontextcode = ({ children }) => {
  return (
    <Contextdarkmode.Provider value={{}}>{children}</Contextdarkmode.Provider>
  );
};

export { Sampelcontextcode, useSampelcontextcode };
