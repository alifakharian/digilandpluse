import { createContext, useContext } from "react";
import { useLocalstorage } from "../Hook/useLocalStorage";
import { useApicontext } from "./Api";

const ContextShoppingCard = createContext();

export const useShoppingcardcontext = () => {
  return useContext(ContextShoppingCard);
};
const ShoppingCard = ({ children }) => {
  const [carditems, setcarditems] = useLocalstorage("cardItems", []);
  const { products } = useApicontext();
  // وجود داشتن یا نداشتن در سبد خرید + در صورت نبود اضافه میکنه

  const handlerIncreasproductQty = (id) => {
    setcarditems((currentitems) => {
      let selecteditem = currentitems.find((item) => item.id == id);
      if (selecteditem == null) {
        return [...currentitems, { id: id, qty: 1, price: products.price }];
      } else {
        return currentitems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  // console.log(carditems);
  // محصول وجود داره میخواییم کم بشه از تهداد اش +
  const handlerDecreasproductqty = (id) => {
    setcarditems((currentitems) => {
      let selecteditem = currentitems.find((item) => item.id == id);
      if (selecteditem.qty === 1) {
        return currentitems.filter((item) => item.id !== id);
      } else {
        return currentitems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  //  نمایش مقدار داخل carditems در DOM پروژه
  // مقدار داخل carditem  را نشان می دهد
  const getProductQty = (id) => {
    const DisplayOrderQty = carditems.find((item) => item.id == id);
    return DisplayOrderQty ? DisplayOrderQty.qty : 0;
  };
  // پاک کردن کل سبد خرید به صورت تک محصول

  const removeCardItems = (id) => {
    setcarditems((elem) => elem.filter((item) => item.id != id));
  };
  //   نمایش کل تعداد محصولات انتخاب شده در بالای صفحه
  const totalqty = carditems.reduce((totalqty, item) => totalqty + item.qty, 0);

  // console.log(carditems);

  return (
    <ContextShoppingCard.Provider
      value={{
        handlerIncreasproductQty,
        handlerDecreasproductqty,
        getProductQty,
        removeCardItems,
        totalqty,
        carditems,
      }}
    >
      {children}
    </ContextShoppingCard.Provider>
  );
};

export { ContextShoppingCard, ShoppingCard };
