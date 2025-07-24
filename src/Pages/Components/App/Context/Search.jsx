import { createContext, useContext, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../../API/ProductApi";

const Contextsearch = createContext();

export const useSearchcontext = () => {
  return useContext(Contextsearch);
};

const Search = ({ children }) => {
  const { control, register, handleSubmit, reset, setValue } = useForm();
  const [filteredItems, setFilteredItems] = useState([]);
  const [offers, setOffers] = useState([]);
  const [showOffers, setShowOffers] = useState(false);
  const search = useWatch({ control, name: "search" });
  const navigate = useNavigate();
  const { data } = useProducts();

  // offers, showOffers, selectOffer
  const offerbox = () => {
    if (search?.length > 1 && data) {
      const uniqueNames = new Set();
      const filteredOffers = (data || []).filter((item) => {
        const isMatch = item.name.includes(search);
        const isUnique = !uniqueNames.has(item.name);
        if (isMatch && isUnique) {
          uniqueNames.add(item.name);
          return true;
        }
        return false;
      });
      setOffers(filteredOffers);
      setShowOffers(true);
    } else {
      setShowOffers(false);
    }
  };
  useEffect(() => {
    offerbox();
  }, [search, data]);
  const selectOffer = (offer) => {
    setValue("search", offer);
    setShowOffers(false);
  };

  const onSubmit = () => {
    if (!search.trim()) {
      navigate("/");
      return;
    }
    const filtered = (data || []).filter((elem) => elem.name.includes(search));

    setFilteredItems(filtered);
    reset({ search: "" });
    // ریست کردن مقدار
    navigate("./Searchresult");
  };

  return (
    <Contextsearch.Provider
      value={{
        filteredItems,
        onSubmit,
        register,
        handleSubmit,
        offers,
        showOffers,
        selectOffer,
      }}
    >
      {children}
    </Contextsearch.Provider>
  );
};

export { Search };
