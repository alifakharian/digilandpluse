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
    <div className="w-full px-4 py-4 bg-white dark:bg-slate-900 dark:text-white duration-700">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Logo Section */}
        <div className="w-full flex justify-center md:justify-start md:w-auto">
          <img
            src={darkMode ? logodark : logolight}
            className="h-10 object-contain"
            alt="Logo"
          />
        </div>

        {/* Search Bar Section */}
        <div className="w-full md:w-auto flex flex-col items-center md:flex-row gap-3">
          <div className="relative flex items-center w-full max-w-md  md:w-[800px]">
            <input
              value={search}
              onChange={searchhandler}
              className="w-full text-gray-700 text-center dark:text-gray-800 bg-slate-200 dark:bg-slate-400 placeholder-rose-300 dark:placeholder-slate-600 font-semibold text-sm border-2 border-rose-200 dark:border-slate-500 rounded-lg px-4 py-2 focus:outline-none"
              placeholder=".... جستجوی محصولات "
            />
            <button
              className="absolute right-2 bg-rose-600 dark:bg-blue-500 dark:hover:bg-blue-700 text-white font-bold p-2 rounded-full duration-700"
              onClick={result}
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* User Action Section */}
        <div className="w-full md:w-auto flex justify-center md:justify-end gap-3 items-center">
          {islogin ? (
            <NavLink
              to="/User"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              <HiUserPlus className="text-xl" />
              <span className="text-sm">پنل کاربر</span>
            </NavLink>
          ) : (
            <div className="flex items-center  gap-2">
              <NavLink
                to="/Login"
                onClick={handleScrollToTop}
                className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                <BiSolidLogInCircle className="text-xl" />
                <span className="text-sm">ثبت نام</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
