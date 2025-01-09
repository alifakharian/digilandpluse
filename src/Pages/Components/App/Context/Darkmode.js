import { createContext, useContext, useEffect, useState } from "react";

const Contextdarkmode = createContext();
export const useDarkmodecontext = () => {
  return useContext(Contextdarkmode);
};

const Darkmode = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // مقدار اولیه از localStorage
  });
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <Contextdarkmode.Provider
      value={{ darkMode, setDarkMode, handleScrollToTop }}
    >
      {children}
    </Contextdarkmode.Provider>
  );
};

export { Contextdarkmode, Darkmode };
