import { createContext, useContext, useEffect } from "react";
import { useProducts } from "../../../../API/ProductApi";
import { Usermanagement } from "../../../../API/ApiClient";
import { useLocalstorage } from "../Hook/useLocalStorage";

const ContextShoppingCard = createContext();

export const useShoppingcardcontext = () => {
  return useContext(ContextShoppingCard);
};

const ShoppingCard = ({ children }) => {
  const userId = localStorage.getItem("userId");
  const storageKey = userId ? `cardItems_${userId}` : "guestCart";
  const [carditems, setcarditems] = useLocalstorage(storageKey, []);

  useEffect(() => {
    const key = userId ? `cardItems_${userId}` : "guestCart";
    const storedItems = JSON.parse(localStorage.getItem(key)) || [];
    setcarditems(storedItems);
  }, [userId]);

  const { data: products } = useProducts();

  const updateCartItemsInApi = async (updatedCart) => {
    if (!userId) return;
    try {
      await Usermanagement.put(`/user/${userId}`, {
        cartItems: updatedCart,
      });
    } catch (err) {
      console.error("خطا در آپدیت سبد خرید:", err);
    }
  };

  const handlerIncreasproductQty = (id) => {
    setcarditems((elem) => {
      let updatedItems;
      const selectedItem = elem.find((item) => item.id === id);

      if (!selectedItem) {
        const product = products?.find((p) => p.id === id);
        const price = product?.price || 0;
        updatedItems = [...elem, { id, qty: 1, price }];
      } else {
        updatedItems = elem.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      updateCartItemsInApi(updatedItems);
      return updatedItems;
    });
  };

  const handlerDecreasproductqty = (id) => {
    setcarditems((currentitems) => {
      const selectedItem = currentitems.find((item) => item.id === id);
      let updatedItems;

      if (selectedItem?.qty === 1) {
        updatedItems = currentitems.filter((item) => item.id !== id);
      } else {
        updatedItems = currentitems.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }

      updateCartItemsInApi(updatedItems);
      return updatedItems;
    });
  };

  const removeCardItems = (id) => {
    const updatedItems = carditems.filter((item) => item.id !== id);
    setcarditems(updatedItems);
    updateCartItemsInApi(updatedItems);
  };

  const getProductQty = (id) => {
    const item = Array.isArray(carditems)
      ? carditems.find((item) => item.id === id)
      : null;
    return item ? item.qty : 0;
  };

  const totalqty = Array.isArray(carditems)
    ? carditems.reduce((total, item) => total + item.qty, 0)
    : 0;

  useEffect(() => {
    const fetchUserCart = async () => {
      if (!userId) {
        setcarditems([]);
        return;
      }

      try {
        const { data } = await Usermanagement.get(`/user/${userId}`);
        const apiCart = data?.cartItems || [];
        setcarditems(apiCart);
      } catch (error) {
        console.error("خطا در گرفتن سبد خرید از API:", error);
        setcarditems([]);
      }
    };

    fetchUserCart();
  }, [userId]);

  return (
    <ContextShoppingCard.Provider
      value={{
        handlerIncreasproductQty,
        handlerDecreasproductqty,
        removeCardItems,
        getProductQty,
        totalqty,
        carditems,
        setcarditems,
      }}
    >
      {children}
    </ContextShoppingCard.Provider>
  );
};

export { ShoppingCard };
