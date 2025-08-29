import { usePannelcontext } from "../Context/Userpannel";
import { useUsers } from "../../../../API/UserpannelApi";
import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import BasketShop from "../BasketShop/BasketShop";
import { IoMdPerson } from "react-icons/io";


export default function User() {
  const { logout, IsLogout, isLogin } = usePannelcontext();
  const { data } = useUsers();
  const lastUser = data?.[data.length - 1];
  //  if (IsLogout) return <Loading />;
  //  if (isLogin) return <Loading />;

  return (
    <>
      <div className="dark:bg-slate-900">
        <h1 className="text-center font-bold text-rose-600 dark:text-blue-600 pt-[25px] ">
          به پنل شخصی خود خوش آمدید
        </h1>
        <div className="flex justify-between px-3 flex-wrap flex-row-reverse">
          <div className="flex justify-end pr-3 pt-5 gap-3 dark:text-white">
            <div className="flex flex-col mt-2  gap-1" dir="rtl">
              <p className="text-rose-600 text-[20px] dark:text-blue-600 font-black">
                {lastUser.firstname} {lastUser.lastname}
              </p>
              <div className="flex mt-1 gap-1">
                <FaPhone className="text-rose-600 dark:text-blue-600" />
                <p className="text-[14px] dark:text-white text-gray-600 font-black">
                  {lastUser.cellphone}
                </p>
              </div>
            </div>
            {/* <img
              src="https://res.cloudinary.com/dfhrcwv0i/image/upload/v1733557457/1_jhtavp.gif"
              className="size-[100px] rounded-full border-2 border-rose-600 dark:border-blue-600"
            /> */}
            <IoMdPerson className="size-[60px] text-rose-600 dark:text-blue-600 rounded-full p-1 border-2 border-rose-600 dark:border-blue-600"/>
          </div>
          <div>
            <MdMarkEmailRead className="size-[40px] bg-rose-600 dark:bg-blue-600 text-white rounded-full p-1" />
            <p className="text-rose-600 pt-2 text-[15px] font-bold dark:text-blue-600 ">
              {lastUser.email}
            </p>
          </div>
        </div>
        <BasketShop />
        <div className="sm:w-[70%] p-[30px]">
          <Link
            onClick={logout}
            to="/register"
            className="bg-red-600 font-black dark:font-black mt-10 hover:bg-red-800 dark:text-gray-100 p-2 text-[14px]  dark:bg-gray-400 dark:hover:bg-gray-600  text-white rounded-md duration-700"
          >
            خروج از حساب کاربری
          </Link>
        </div>
      </div>
    </>
  );
}
