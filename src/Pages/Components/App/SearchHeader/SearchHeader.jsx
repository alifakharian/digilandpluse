import { FaSearch } from "react-icons/fa";
import { useDarkmodecontext } from "../Context/Darkmode";
import logolight from "../Images/logo/4.svg";
import { BiSolidLogInCircle } from "react-icons/bi";
import { HiUserPlus } from "react-icons/hi2";
import logodark from "../Images/logo/5.png";
import { NavLink } from "react-router-dom";
import { useSearchcontext } from "../Context/Search";
import { usePannelcontext } from "../Context/Userpannel.jsx";


export default function SearchHeader() {
  const { darkMode, handleScrollToTop } = useDarkmodecontext();
  const { onSubmit, register, handleSubmit, offers, showOffers, selectOffer } =
    useSearchcontext();
  const { isLogin } = usePannelcontext();

  return (
    <div className="w-full bg-gray-100 px-4 py-4   dark:bg-slate-800 dark:text-white duration-700">
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col items-center w-full px-4 mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl"
        >
          {/* Search Input Container */}
          <div className="relative w-full">
            <input
              {...register("search")}
              className="w-full h-10 px-4 py-2 text-sm font-semibold text-center text-gray-700 bg-slate-200 placeholder-rose-300 rounded-lg border-2 border-rose-200 focus:outline-none dark:bg-slate-400 dark:placeholder-slate-600 dark:border-slate-500 sm:text-base md:h-12 md:px-6"
              placeholder=".... جستجوی محصولات"
              autoComplete="off"
            />

            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-rose-600 text-white p-2 rounded-full duration-700 hover:bg-rose-700 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-700"
            >
              <FaSearch />
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {showOffers && offers.length > 0 && (
            <button
              onClick={handleSubmit(onSubmit)}
              className="w-full outline-none mt-2 sm:mt-1 sm:w-[95%] md:w-[90%] lg:w-[85%]"
            >
              <div className="p-2 border-2 border-rose-200 duration-700 hover:bg-slate-300 bg-slate-200 rounded-md shadow-lg dark:bg-slate-600 dark:border-slate-500">
                {offers.map((offer, index) => (
                  <div
                    key={index}
                    onClick={() => selectOffer(offer)}
                    className=" cursor-pointer text-center rounded"
                  >
                    {offer.name}
                  </div>
                ))}
              </div>
            </button>
          )}
        </form>

        {/* User Action Section */}

        {/* ... سایر کدها ... */}
        <>
          <NavLink
            className="bg-rose-600 dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-rose-700 text-white font-bold p-2 rounded-lg"
            to="/Allusers"
          >
            لیست کاربران
          </NavLink>
          {isLogin && isLogin ? (
            <NavLink
              to="/User"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              <HiUserPlus className="text-xl" />
              <span className="text-sm">پنل کاربر</span>
            </NavLink>
          ) : (
            <NavLink
              to="/Register"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              <BiSolidLogInCircle className="text-xl" />
              <span className="text-sm">ثبت نام</span>
            </NavLink>
          )}
          {/* <NavLink
            to="/Register"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            <BiSolidLogInCircle className="text-xl" />
            <span className="text-sm">ثبت نام</span>
          </NavLink> */}
        </>
      </div>
    </div>
  );
}
