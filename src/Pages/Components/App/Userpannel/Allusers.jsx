import { Link } from "react-router-dom";
import { useUsers } from "../../../../API/UserpannelApi.jsx";
import { usePannelcontext } from "../Context/Userpannel.jsX";

export default function Allusers() {
  const { data } = useUsers();
  const { deletesingleuser } = usePannelcontext();
  // console.log(data);

  return (
    <div className="flex flex-col gap-5 py-7 px-4 dark:bg-slate-900 bg-gray-200">
      {data &&
        data.map((elem) => (
          <div
            key={elem.id}
            className="flex flex-col sm:flex-row sm:items-center bg-rose-100 dark:bg-slate-500 py-4 px-4 dark:border-white border-2 border-rose-400 rounded-xl w-full  sm:w-[90%] md:w-[80%] lg:w-[40%] mx-auto justify-between gap-4"
          >
            <Link
              to={`/Allusers/${elem.id}`}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              <img
                src={elem.avatar}
                alt="User Avatar"
                className="w-24 h-24 sm:w-20 sm:h-20 border-2 border-rose-400 dark:border-blue-600 rounded-full bg-gray-50"
              />
              <div className="flex flex-col text-center sm:text-left">
                <div className="text-[14px] font-semibold text-gray-900 dark:text-white">
                  {elem.firstname} {elem.lastname}
                </div>
                <div className="mt-1 text-[12px] text-gray-600 dark:text-gray-200 truncate">
                  {elem.email}
                </div>
              </div>
            </Link>

            <div className="text-center sm:text-right">
              <p
                className="dark:text-white text-gray-600 font-bold text-[12px]"
                dir="rtl"
              >
                حساب کاربری از:
              </p>
              <p className="en-number mt-1 text-[13px]">{elem.createdAt}</p>
              <button
                onClick={() => deletesingleuser(elem.id)}
                className="bg-rose-600 mt-3 text-[12px] dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-rose-700 text-white font-bold px-4 py-1.5 rounded-xl"
              >
                حذف کاربر
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
