import React from "react";
import { FaSearch } from "react-icons/fa";
import { useApicontext } from "../Context/Api";
import { useDarkmodecontext } from "../Context/Darkmode";
import logolight from "../Images/logo/4.svg";
import { BiSolidLogInCircle } from "react-icons/bi";
import { HiUserPlus } from "react-icons/hi2";
import logodark from "../Images/logo/5.png";
import { NavLink } from "react-router-dom";
import { useLoginContext } from "../Context/Login";
export default function Search() {
  const { result, searchhandler, search } = useApicontext();
  const { darkMode, handleScrollToTop } = useDarkmodecontext();
  const { islogin } = useLoginContext();

  return (
    <div className="">
      <div className="flex  flex-row-reverse flex-wrap justify-between bg-white  dark:bg-slate-900 dark:text-white duration-700 py-6 gap-2">
        <div className="flex flex-wrap flex-row-reverse">
          <div>
            <img
              src={darkMode ? logodark : logolight}
              className="w-[200px] h-[40px]"
            />
          </div>
          <div className="flex  flex-row-reverse gap-x-2">
            <div className="">
              <button
                className="dark:bg-blue-500 mr-7 mt-1 bg-rose-600 dark:hover:bg-blue-700 text-white font-bold px-2 rounded-lg w-[30px] h-[30px] duration-700"
                onClick={result}
              >
                <FaSearch />
              </button>
            </div>
            <input
              value={search}
              onChange={searchhandler}
              className="text-slate-700   dark:placeholder-slate-600 placeholder-rose-300 font-black text-[16px] dark:text-gray-800 border-[3.5px] bg-slate-200 border-rose-200  dark:border-slate-500 outline-none rounded-xl dark:bg-slate-400 text-center py-1
              smd:w-[200px] sm:w-[300px] lg:w-[500px] 
              "
              placeholder=".... جستجوی محصولات "
            />
          </div>
        </div>

        {islogin ? (
          <NavLink
            to="/User"
            onClick={handleScrollToTop}
            className="btn btn-danger  pt-3 ml-3 dark:btn-primary"
          >
           <div className="flex gap-1">
           <div className="text-[20px]"><HiUserPlus/></div>
           <div className="text-[12px] pt-[2px] font-black">پنل کاربر</div>
           </div>
          </NavLink>
        ) : (
          <div className="flex flex-row-reverse gap-1  btn btn-danger ml-3 dark:btn-primary">
            <NavLink
              to="/Login"
              onClick={handleScrollToTop}
              className="text-[14px] font-black"
            >
              ثبت نام
            </NavLink>
            <div className="mt-[2px] text-[20px] font-black">
              <BiSolidLogInCircle />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
