import { createContext, useContext } from "react";
import { useCallback, useEffect, useState, useMemo } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ContextLogin = createContext();
export const useLoginContext = () => useContext(ContextLogin);

const Login = ({ children }) => {
  const navigator = useNavigate();
  const [firstname, setfirstname] = useState("");
  const [savefirstname, setsavefirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [savelastname, setsavelastname] = useState("");

  const [scrolltop, setScrolltop] = useState("");
  const [refreshrandomnumber] = useState(<FiRefreshCw />);
  const [phonenumber, setphonenumber] = useState("");
  const [firstrandomnumber, setfirstrandomnumber] = useState(
    Math.floor(Math.random() * 100 + 7)
  );
  const [secondrandomnumber, setsecondrandomnumber] = useState(
    Math.floor(Math.random() * 100)
  );
  const [answer, setanswer] = useState("");

  const generaterandomnumber = useCallback(() => {
    setfirstrandomnumber(Math.floor(Math.random() * 100 + 7));
    setsecondrandomnumber(Math.floor(Math.random() * 100));
  }, []);

  const result = useMemo(() => {
    return firstrandomnumber + secondrandomnumber;
  }, [firstrandomnumber, secondrandomnumber]);

  const handleranswer = useCallback((e) => {
    setanswer(e.target.value);
  }, []);

  const handlerfirstname = useCallback((e) => {
    setfirstname(e.target.value);
  }, []);

  const handlerlastname = useCallback((e) => {
    setlastname(e.target.value);
  }, []);

  const handlerphonenumber = useCallback((e) => {
    setphonenumber(e.target.value);
  }, []);

  const submit = useCallback(() => {
    if (answer == result) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      localStorage.setItem("savelastname", lastname);
      localStorage.setItem("savefirstname", firstname);
      setsavelastname(lastname);
      setsavefirstname(firstname);
      setfirstname("");
      setlastname("");
      setanswer("");
      setphonenumber("");
      generaterandomnumber();
      navigator("/User");
    } else {
      alert("پاسخ محاسبه درست نمی باشد !!!!!");
    }
  }, [answer, result, lastname, firstname, generaterandomnumber, navigator]);

 

  return (
    <ContextLogin.Provider
      value={{
        firstname,
        lastname,
        phonenumber,
        handlerphonenumber,
        handlerfirstname,
        handlerlastname,
        handleranswer,
        firstrandomnumber,
        secondrandomnumber,
        refreshrandomnumber,
        generaterandomnumber,
        submit,
        result,
        answer,
        scrolltop,
      }}
    >
      {children}
    </ContextLogin.Provider>
  );
};

export { ContextLogin, Login };
