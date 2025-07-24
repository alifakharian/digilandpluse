import {
  FaGift,
  FaLocationDot,
  FaStar,
  FaUserLarge,
  FaWallet,
} from "react-icons/fa6";
import { RiHome2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { MdEmail, MdStreetview, MdWorkHistory } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { BsSave2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import BasketShop from "../BasketShop/BasketShop";
import { usePannelcontext } from "../Context/Userpannel";
import { useUsers } from "../../../../API/UserpannelApi";

export default function User() {
  const { logout } = usePannelcontext();
  const { data } = useUsers();
  const lastUser = data?.[data.length - 1];
  
  const { IsLogout, isLogin } = usePannelcontext();
  return (
    <>
      <div className="dark:bg-slate-900  dark:text-white">
        <div
          className="flex dark:text-white flex-wrap  justify-center gap-x-[20px] gap-y-[20px]  pt-5"
          dir="rtl"
        >
          <div className="2xl:w-[17vw] dark:bg-slate-800 border-solid border-2 border-rose-600 dark:border-blue-600 rounded-xl">
            <div className="flex justify-center mt-1 mx-2   gap-x-[30px]">
              <FaUserLarge className="size-[60px] rounded-full bg-rose-600 dark:bg-blue-600 text-white p-2" />
              {isLogin ? (
                <p className="text-rose-600 dark:text-white mt-5 font-black">
                  {lastUser?.firstname} {lastUser?.lastname}
                </p>
              ) : null}
            </div>
            <p className="text-gray-700 dark:text-white my-3 text-center text-[15px] font-semibold px-2">
              کاربر گرامی، خوش آمدید
            </p>
          </div>
          <div
            className="2xl:w-[37vw] dark:bg-slate-800  flex justify-between bg-pink-100 border-2 border-rose-600
        dark:border-blue-600 p-3 rounded-2xl"
          >
            <FaWallet className="size-[55px] mt-4  rounded-xl  text-rose-600 dark:text-blue-600 p-2" />
            <p className="text-gray-700 dark:text-white  mt-7 text-start ">
              0 تومان موجودی کیف پول
            </p>
          </div>

          <div className="2xl:w-[17vw] flex justify-between dark:bg-slate-800   border-solid border-2 border-rose-600 dark:border-blue-600  rounded-2xl">
            <div className="flex">
              <FaGift className="size-[55px] dark:text-blue-600 mt-8 mr-2 rounded-xl  text-rose-600 p-2" />
              <p className="mt-11 size-4 mr-3 text-rose-600 font-extrabold"></p>
            </div>
            <p className="text-gray-700 mt-11 ml-2 dark:text-white">
              در انتظار پرداخت
            </p>
          </div>

          <div className="2xl:w-[17vw] dark:bg-slate-800 flex justify-between  border-solid border-2 border-rose-600  rounded-2xl dark:border-blue-600 ">
            <div className="flex">
              <FaStar className="size-[55px] mt-8 mr-2 rounded-xl  text-rose-600 dark:text-blue-600 p-2" />
              <p className="mt-11 size-4  text-rose-600 font-extrabold"></p>
            </div>
            <p className="text-gray-700 mt-11 dark:text-white ml-2">
              امتیاز و تخفیف
            </p>
          </div>
        </div>
        <div
          className="flex flex-wrap justify-around py-[40px]  gap-y-3"
          dir="rtl"
        >
          <div
            className="2xl:w-[17vw] sm:h-[80vh] dark:bg-slate-800  dark:border-blue-600 border-rose-600 border-2 rounded-xl  p-3  bg-slate- flex flex-col flex-wrap gap-y-[10px]"
            dir="rtl"
          >
            <div className="flex mt-3 dark:text-white  gap-x-[15px]   text-gray-600 hover:text-rose-600">
              <RiHome2Fill className="size-[20px]" />
              <p className="">خلاصه فعالیت ها</p>
            </div>
            <div className="flex mt-3 gap-x-[15px] dark:text-white   text-gray-600 hover:text-rose-600">
              <MdWorkHistory className="size-[20px]" />
              <p className="">تاریخچه سفارشات</p>
            </div>
            <div className="flex mt-3 gap-x-[15px] dark:text-white    text-gray-600 hover:text-rose-600">
              <FaLocationDot className="size-[20px]" />
              <p className="">آدرس ها</p>
            </div>
            <div className="flex mt-3 gap-x-[15px] dark:text-white    text-gray-600 hover:text-rose-600">
              <MdEmail className="size-[20px]" />
              <p className="">پیام ها</p>
            </div>
            <div className="flex mt-3 gap-x-[15px] dark:text-white  text-gray-600 hover:text-rose-600">
              <ImUsers className="size-[20px]" />
              <p className="">دیدگاه ها</p>
            </div>
            <div className="flex mt-3 gap-x-[15px] dark:text-white   text-gray-600 hover:text-rose-600">
              <BsSave2Fill className="size-[20px]" />
              <p className="">علاقه مندی ها</p>
            </div>
            <div className="flex mt-3 gap-x-[15px] dark:text-white   text-gray-600 hover:text-rose-600">
              <MdStreetview className="size-[20px]" />
              <p className="">بازدید های اخیر</p>
            </div>
            <div className="flex mt-3 gap-x-[15px]  dark:text-white   text-gray-600 hover:text-rose-600">
              <FaUser className="size-[20px]" />
              <p className="">اطلاعات حساب کار بری</p>
            </div>
            <div className="flex mt-3 gap-x-[15px] dark:text-white   text-gray-600 hover:text-rose-600">
              <AiFillSound className="size-[20px]" />
              <p className="">ارسال تیکت</p>
            </div>
          </div>
          <div className="sm:w-[70%] mx-2">
            {IsLogout ? (
              <></>
            ) : (
              <>
                {/* سبد خرید کاربر */}
                <BasketShop />
                <Link
                  onClick={logout}
                  to="/register"
                  className="bg-red-600 font-black dark:font-black mt-10 hover:bg-red-800 dark:text-gray-100 p-2 text-[14px]  dark:bg-gray-400 dark:hover:bg-gray-600  text-white rounded-md duration-700"
                >
                  خروج از حساب کاربری
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
