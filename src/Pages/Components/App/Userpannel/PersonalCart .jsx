// import { usePannelcontext } from "../Context/Userpannel";

// function PersonalCart() {
//   const { productsInCart } = usePannelcontext();
//   return (
//     <>
//       {productsInCart &&
//         productsInCart.map((elem) => {
//           return (
//             <div
//               key={elem.i}
//               className="mb-4 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start"
//               dir="rtl"
//             >
//               <img
//                 className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-rose-600 border-[3px] dark:border-blue-500"
//                 src={elem.image}
//                 alt=""
//               />
//               <div className=" p-3 rounded-lg  w-full sm:w-auto">
//                 <div className="font-semibold text-base sm:text-lg">
//                   {elem.title}
//                 </div>
//                 <div className="text-sm sm:text-base">تعداد: {elem.qty}</div>
//                 <div className="text-sm sm:text-base">
//                   قیمت واحد: {elem.price}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//     </>
//   );
// }

// export default PersonalCart;
