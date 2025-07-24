import { useParams } from "react-router-dom";
import { useProducts } from "../../../../API/ProductApi";
import { useSinglePerson } from "../../../../API/UserpannelApi";
import Loading from "../Products/Loading";

function UserCart() {
  const { id } = useParams();

  const { data: singelperson, isLoading: loadingsingelperson } =
    useSinglePerson(id);

  const { data: allproducts, isLoading: loaddingproducts } = useProducts();

  if (loadingsingelperson || loaddingproducts) return <Loading />;

  // تبدیل cartItems کاربر به اطلاعات کامل محصول
  const fullCartDetails =
    singelperson?.cartItems?.map((item) => {
      const product = allproducts.find((p) => +p.i === +item.id); 
      // دقت کن: item.id
      return {
        ...item,
        ...product,
      };
    }) || [];
  return (
    <>
      {fullCartDetails.length === 0 ? (
        <h2 className="text-center dark:text-white">سبد خرید خالی است</h2>
      ) : (
        fullCartDetails.map((item) => (
          <div
            key={item.id}
            className="border-b py-2 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <img
                className="size-[130px] rounded-full border-rose-600 border-[3px] dark:border-blue-500 mr-5"
                src={item.image}
                alt={item.title}
                width={60}
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>تعداد: {item.qty}</p>
              </div>
            </div>
            <p className="font-bold">{item.price * item.qty} تومان</p>
          </div>
        ))
      )}
    </>
  );
}

export default UserCart;
