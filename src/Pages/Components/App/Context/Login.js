import { createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const ContextLogin = createContext();
export const useLoginContext = () => useContext(ContextLogin);

const Login = ({ children }) => {
  const navigator = useNavigate();
  const [islogin, setislogin] = useState(() => {
    const savedislogin = localStorage.getItem("islogin");
    return savedislogin === "true";
  });
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [testsum, settestsum] = useState("");
  const [firstrandomnumber] = useState(Math.floor(Math.random() * 10));
  const [secendrandomnumber] = useState(Math.floor(Math.random() * 100 + 7));
  const resultrandomnumbersum = firstrandomnumber + secendrandomnumber;
  const handlerfirstname = (e) => {
    const valuefirstname = e.target.value;
    setfirstname(valuefirstname);
    localStorage.setItem("firstname", valuefirstname);
  };
  const handlerlastname = (e) => {
    const valuelastname = e.target.value;
    setlastname(valuelastname);
    localStorage.setItem("lastname", valuelastname);
  };
  const handlerphonenumber = (e) => {
    setphonenumber(e.target.value);
  };
  const handlertestsum = (e) => {
    settestsum(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("islogin", islogin);
  }, [islogin]);

  useEffect(() => {
    const savedfirstName = localStorage.getItem("firstname");
    const savedlastname = localStorage.getItem("lastname");
    setfirstname(savedfirstName);
    setlastname(savedlastname);
  }, []);
  const submit = () => {
    if (testsum == resultrandomnumbersum) {
      setislogin(true);
      navigator("/User");
    } else {
      alert("محاسبه درست نمی باشد!!!!!");
    }
  };
  const logout = () => {
    localStorage.clear();
    setfirstname("");
    setlastname("");
    setphonenumber("");
    settestsum("");
    setislogin(false);
  };

  return (
    <ContextLogin.Provider
      value={{
        islogin,
        firstname,
        lastname,
        phonenumber,
        handlerfirstname,
        handlerlastname,
        handlerphonenumber,
        firstrandomnumber,
        secendrandomnumber,
        handlertestsum,
        testsum,
        submit,
        logout,
      }}
    >
      {children}
    </ContextLogin.Provider>
  );
};

export { ContextLogin, Login };
