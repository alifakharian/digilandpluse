import { useShoppingcardcontext } from "../Context/ShoppingCard";
import Updatedcomponent from "./Hoc";

const Singleproduct = ({ singelproducts, i }) => {
  const { handlerDecreasproductqty, handlerIncreasproductQty, getProductQty } =
    useShoppingcardcontext();

  return (
    <div>
      <div
        className="flex dark:bg-slate-900  dark:text-white duration-700 flex-wrap justify-center"
        dir="rtl"
      >
        <div className="md:w-[25%] bg-yellow">
          <div className="">
            <img
              src={singelproducts.image}
              className="img-fluid smd:w-[300px] rounded-full dark:border-[2.5px] dark:border-blue-600 smd:h-[300px]"
            />
          </div>
        </div>
        <div className="md:w-[70%] px-4 dark:text-white bg-teal-6 flex flex-col justify-start mt-[25px]">
          <div className="text-red-600 dark:text-white text-[20px] font-black">
            {singelproducts.title}
          </div>
          <div className="text-gray-600 dark:text-blue-500 my-3 line-through decoration-[1.2px]">
            {Number(singelproducts.prediscount).toLocaleString()} تومان
          </div>
          <div className="flex gap-2 dark:text-white text-rose-700 font-bold">
            <div className=" text-[35px] tracking-[0.30rem] font-bold">
              {Number(singelproducts.price).toLocaleString()}
            </div>
            <p className="mt-5 text-[15px]">تومان</p>
          </div>
          <div className="mt-5 text-[14px] dark:text-white text-gray-700 leading-[40px] font-bold">
            {singelproducts.description}
          </div>
          {getProductQty(parseInt(i)) == 0 ? (
            <button
              onClick={() => handlerIncreasproductQty(parseInt(i))}
              className="btn btn-danger my-4 sm:w-[30%] dark:bg-gray-600 dark:hover:bg-gray-700 duration-700 "
            >
              افزودن به سبد خرید
            </button>
          ) : (
            <div className="flex py-2 flex-wrap align-items-center gap-8">
              <button
                onClick={() => handlerDecreasproductqty(parseInt(i))}
                className="btn btn-primary"
              >
                -
              </button>
              <span className="mt-3 text-rose-600 font-bold dark:text-white duration-700">
                {getProductQty(parseInt(i))}
              </span>

              <button
                onClick={() => handlerIncreasproductQty(parseInt(i))}
                className="btn btn-primary"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Updatedcomponent(Singleproduct);
