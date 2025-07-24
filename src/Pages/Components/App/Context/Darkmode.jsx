import { createContext, useContext, useEffect } from "react";
import { useLocalstorage } from "../Hook/useLocalStorage";

const Contextdarkmode = createContext();

const useDarkmodecontext = () => {
  return useContext(Contextdarkmode);
};

const Darkmode = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalstorage("darkMode", false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Contextdarkmode.Provider
      value={{ darkMode, setDarkMode, handleScrollToTop }}
    >
      {children}
    </Contextdarkmode.Provider>
  );
};

export { Darkmode, useDarkmodecontext };
