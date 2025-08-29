import { useShoppingcardcontext } from "../Context/ShoppingCard.jsx";
import Productbasket from "./Productbasket.jsx";

export default function BasketShop() {
  const { carditems } = useShoppingcardcontext();

  // محاسبه مجموع کل قیمت‌ها

  return (
    <>
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
              پرداخت نهایی : تومان
            </button>
          </div>
        )}
      </div>
    </>
  );
}
