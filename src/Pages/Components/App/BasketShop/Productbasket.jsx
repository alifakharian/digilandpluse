import { useEffect, useState } from "react";
import { useShoppingcardcontext } from "../Context/ShoppingCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Productbasket({ qty, id }) {
  const {
    handlerIncreasproductQty,
    handlerDecreasproductqty,
    removeCardItems,
  } = useShoppingcardcontext();

  const [singelproducts, setsingelproducts] = useState([]);
  const client = axios.create({
    baseURL: `https://67518882d1983b9597b34252.mockapi.io`,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsingle = await client.get(`/Product/${id}`);
        setsingelproducts(productsingle.data);
      } catch (error) {
        if (error) {
          console.log("Disconnect to API");
        }
      }
    };
    fetchData();
  }, []);

  let price = +singelproducts.price;
  let singeltotalprice = price * qty;

  return (
    <>
      <div dir="rtl">
        <div className="flex py-5 gap-6 flex-wrap">
          <Link to={`/Products/${id}`}>
            <img
              src={singelproducts.image}
              className="size-[130px] rounded-full border-rose-600 border-[3px] dark:border-blue-500 mr-5"
            />
          </Link>
          <div className="flex flex-col">
            <p className="mt-5 text-rose-600 font-bold dark:text-white">
              {singelproducts.title}
            </p>
            <div className="flex gap-2 mt-3 my-2">
              <button
                onClick={() => handlerDecreasproductqty(id)}
                className="btn btn-primary"
              >
                -
              </button>
              {/* <h1>{i}</h1> */}
              <p className="mt-3">{qty}</p>

              <button
                onClick={() => handlerIncreasproductQty(id)}
                className="btn btn-primary"
              >
                +
              </button>
              <button
                onClick={() => removeCardItems(id)}
                className="btn btn-danger dark:bg-gray-400  "
              >
                حذف
              </button>
            </div>
            <div className="text-red-700 font-bold dark:text-white">
              مجموع قیمت : {singeltotalprice.toLocaleString(3)}
            </div>
          </div>
        </div>
        <hr />
        <hr />

        <hr />
        <hr />
      </div>
    </>
  );
}
