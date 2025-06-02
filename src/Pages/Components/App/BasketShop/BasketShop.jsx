import React, { useState, useEffect } from "react";
import Productbasket from "./Productbasket.jsx";
import { useShoppingcardcontext } from "../Context/ShoppingCard.js";
import axios from "axios";

export default function BasketShop() {
  const { carditems } = useShoppingcardcontext();
  const [pricesArray, setPricesArray] = useState([]);

  const client = axios.create({
    baseURL: `https://67518882d1983b9597b34252.mockapi.io`,
  });

  useEffect(() => {
    const fetchPrices = async () => {
      const newPrices = await Promise.all(
        carditems.map(async (item) => {
          try {
            const response = await client.get(`/Product/${item.id}`);
            const productPrice = response.data.price || 0; // در صورت نبود مقدار، صفر
            return productPrice * item.qty; // قیمت کل هر محصول
          } catch (error) {
            console.error("Failed to fetch product:", error);
            return 0;
          }
        })
      );
      setPricesArray(newPrices);
    };

    fetchPrices();
  }, [carditems]);

  // محاسبه مجموع کل قیمت‌ها
  const calculateTotalPrice = () => {
    return pricesArray.reduce((total, price) => total + price, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="dark:bg-slate-900 py-5 duration-700 dark:text-white pb-[112px] dark:pb-[123px]">
      {carditems.length == "" ? (
        <div className="text-center text-red-600 font-bold dark:text-white">
          سبد خرید شما خالی می باشد
        </div>
      ) : (
        <div className=" dark:bg-slate-900 dark:text-white">
          {carditems &&
            carditems.map((elem) => (
              <div key={elem.id}>
                <Productbasket {...elem} />
              </div>
            ))}
          <button
            onClick={() => window.print()}
            className="btn inline-block m-6 py-3 btn-danger dark:btn-primary dark:text-white"
          >
            پرداخت نهایی : {totalPrice.toLocaleString("fa-IR")} تومان
          </button>
        </div>
      )}
    </div>
  );
}
