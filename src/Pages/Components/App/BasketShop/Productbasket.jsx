import { Showsingleproduct } from "../../../../API/ProductApi";
import { useShoppingcardcontext } from "../Context/ShoppingCard";
import { Link } from "react-router-dom";
import Loading from "../Products/Loading";
import { MdDeleteForever } from "react-icons/md";

export default function Productbasket({ qty, id }) {
  const {
    handlerIncreasproductQty,
    handlerDecreasproductqty,
    removeCardItems,
  } = useShoppingcardcontext();

  const { data: singelproducts, isLoading, isError } = Showsingleproduct(id);

  if (isLoading) return <Loading />;
  if (isError) return <Loading />;

  const singeltotalprice = +singelproducts?.price * qty;

  return (
    <div dir="rtl">
      <div className="flex py-5 gap-6 flex-wrap">
        <Link to={`/Products/${id}`}>
          <img
            src={singelproducts?.image}
            className="size-[130px] rounded-full border-rose-600 border-[3px] dark:border-blue-500 mr-5"
            alt={singelproducts?.title}
          />
        </Link>
        <div className="flex flex-col">
          <p className="mt-5 text-rose-600 font-bold dark:text-white">
            {singelproducts?.title}
          </p>
          <div className="flex gap-2 mt-3 my-2">
            <button
              onClick={() => handlerDecreasproductqty(id)}
              className="btn btn-primary"
            >
              -
            </button>
            <p className="mt-3">{qty}</p>
            <button
              onClick={() => handlerIncreasproductQty(id)}
              className="btn btn-primary"
            >
              +
            </button>
            <button
              onClick={() => removeCardItems(id)}
              className="text-[35px] text-rose-600 dark:text-gray-300"
            >
              <MdDeleteForever />
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
  );
}
