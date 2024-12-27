import React from "react";
import { FaSearch } from "react-icons/fa";
import { useApicontext } from "../Context/Api";
import { useDarkmodecontext } from "../Context/Darkmode";
import logolight from "../Images/logo/4.svg";
import logodark from "../Images/logo/5.png";
import { NavLink } from "react-router-dom";
export default function Search() {
  const { result, searchhandler, search } = useApicontext();
  const { darkMode, handleScrollToTop } = useDarkmodecontext();

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
        <NavLink to="/Login"
          onClick={handleScrollToTop}
          className="btn btn-danger ml-3 dark:btn-primary"
        >
          ثبت نام | ورود
        </NavLink>
      </div>
    </div>
  );
}
