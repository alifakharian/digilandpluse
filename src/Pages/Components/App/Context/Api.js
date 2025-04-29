import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContextApi = createContext();
export const useApicontext = () => useContext(ContextApi);

const Api = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [search, setsearch] = useState();
  const navigate = useNavigate();
  const searchhandler = (e) => {
    setsearch(e.target.value);
  };

  // console.log(id);
  const client = axios.create({
    baseURL: `https://67518882d1983b9597b34252.mockapi.io`,
  });

  const fetchData = async () => {
    try {
      const productsResponse = await client.get("/Product");
      setProducts(productsResponse.data);
    } catch (error) {
   
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const result = () => {
    navigate("./Searchresult");
    if (search.trim() === "") {
      navigate("/");
      return;
    }
    const filtered = products.filter((elem) =>
      elem.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(filtered);
    setsearch("");
  };

  return (
    <ContextApi.Provider
      value={{ products, result, filteredItems, searchhandler, search }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, Api };
