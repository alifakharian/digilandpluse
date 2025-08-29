import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useShoppingcardcontext } from "../Context/ShoppingCard";
import { useDarkmodecontext } from "../Context/Darkmode";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { TiThMenuOutline } from "react-icons/ti";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
export default function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { totalqty } = useShoppingcardcontext();
  const { darkMode, setDarkMode, handleScrollToTop } = useDarkmodecontext();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(false); // بستن منوی موبایل در حالت دسکتاپ
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <nav
          className="bg-gray-300  dark:bg-slate-700 duration-700 dark:text-white py-3 pr-5"
          dir="rtl"
        >
          {/* منوی موبایل */}
          <section className="flex lg:hidden justify-between items-center">
            {/* آیکن منوی همبرگری */}
            <div
              className="space-y-2 mr-2 font-extrabold cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <TiThMenuOutline className="text-[25px]" />
            </div>

            {/* آیکن‌های موبایل */}
            <div className="flex items-center">
              <NavLink
                onClick={handleScrollToTop}
                to="/BasketShop"
                className="relative"
              >
                <HiOutlineShoppingCart className="text-[25px] text-red-700 dark:text-white" />
                {totalqty !== 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-700 dark:bg-gray-300 dark:text-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalqty}
                  </div>
                )}
              </NavLink>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 flex items-center"
              >
                {darkMode ? (
                  <IoSunny className=" outline-none text-[25px]" />
                ) : (
                  <BsFillMoonStarsFill className="text-gray-700 outline-none text-[25px]" />
                )}
              </button>
            </div>
          </section>

          {/* منوی بازشونده موبایل */}
          <div
            className={`fixed  top-0 right-0 w-[50%] h-full bg-gray-300 dark:bg-slate-700 dark:text-white shadow-lg z-50 transform ${
              isNavOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          >
            <div
              className="absolute top-5 right-5 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <IoIosCloseCircle className="text-[40px] text-gray-600 dark:text-white" />
            </div>

            <ul className="mt-20 space-y-5 text-right px-5 text-white">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-600 block text-lg dark:bg-gray-400 text-white rounded-md px-2 py-1"
                      : "text-rose-600 block text-lg dark:text-white px-2 py-1"
                  }
                >
                  صفحه اصلی
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Products"
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-600 block text-lg dark:bg-gray-400 text-white rounded-md px-2 py-1"
                      : "text-rose-600 block text-lg dark:text-white px-2 py-1"
                  }
                >
                  محصولات
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-600 block text-lg dark:bg-gray-400 text-white rounded-md px-2 py-1"
                      : "text-rose-600 block text-lg dark:text-white px-2 py-1"
                  }
                >
                  ارتباط با ما
                </NavLink>
              </li>
            </ul>
          </div>

          {/* منوی دسکتاپ */}
          <div className="hidden lg:flex justify-between items-center">
            <ul className="flex space-x-8">
              <li>
                <NavLink
                  onClick={handleScrollToTop}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-600 dark:bg-gray-400 text-white rounded-md px-2 py-1"
                      : "text-rose-600 dark:text-white px-2 py-1"
                  }
                  to="/"
                >
                  صفحه اصلی
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleScrollToTop}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-600 mr-6 dark:bg-gray-400 text-white rounded-md px-2 py-1"
                      : "text-rose-600 mr-6 dark:text-white px-2 py-1"
                  }
                  to="/Products"
                >
                  محصولات
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleScrollToTop}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-600 dark:bg-gray-400 text-white rounded-md px-2 py-1"
                      : "text-rose-600 dark:text-white px-2 py-1"
                  }
                  to="/Contact"
                >
                  ارتباط با ما
                </NavLink>
              </li>
            </ul>
            <div className="ml-3 flex gap-x-[20px]">
              <NavLink
                to="/BasketShop"
                onClick={handleScrollToTop}
                className="relative"
              >
                <HiOutlineShoppingCart className="text-[25px] text-red-700 dark:text-white" />
                {totalqty !== 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-700 dark:bg-gray-300 dark:text-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalqty}
                  </div>
                )}
              </NavLink>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center"
              >
                {darkMode ? (
                  <IoSunny className="text-[25px]" />
                ) : (
                  <BsFillMoonStarsFill className="text-gray-700 text-[25px]" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
