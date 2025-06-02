import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hook/useFetch";
const ContextApi = createContext();
export const useApicontext = () => useContext(ContextApi);
const Api = ({ children }) => {
  const { data: products, loading, error } = useFetch("/Product", []);
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchhandler = (e) => setSearch(e.target.value);
  const result = () => {
    if (!search.trim()) {
      navigate("/");
      return;
    }
    const filtered = (products || []).filter((elem) =>
      elem.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(filtered);
    setSearch("");
    navigate("./Searchresult");
  };

  return (
    <ContextApi.Provider
      value={{
        products,
        filteredItems,
        searchhandler,
        search,
        result,
        loading,
        error,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, Api };
