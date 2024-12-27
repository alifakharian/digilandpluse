import React from "react";
import { useLoginContext } from "../Context/Login";
import { FaCheckCircle } from "react-icons/fa";


export default function Login() {
  const {
    firstname,
    lastname,
    phonenumber,
    handlerphonenumber,
    handlerfirstname,
    handlerlastname,
    handleranswer,
    firstrandomnumber,
    secondrandomnumber,
    refreshrandomnumber,
    generaterandomnumber,
    submit,
    result,
    answer,
    scrolltop,
  } = useLoginContext();
  return (
    <>
      <div className="grid grid-cols-1 duration-700 dark:bg-slate-900 dark:text-white sm:grid-cols-2 align-items-center place-items-center   px-3  gap-x-[20px] gap-y-3">
        <div className="py-[25px]">
          <img
            src={require("../Images/login/1.jpg")}
            className="rounded-lg  size-[500px]"
          />
        </div>
        <div
          className=" rounded-xl text-right  bg-gray-200 text-gray-900 font-black dark:border-none dark:text-white border-[2.5px] border-gray-400 dark:bg-blue-800"
          dir="rtl"
        >
          {/* <h1 className="text-center py-2">عضویت</h1> */}

          <div className="flex mt-4 flex-wrap justify-center mx-3">
            <div>
              <div className="mr-5 text-rose-600 dark:text-white">نام</div>
              <input
                value={firstname}
                onChange={handlerfirstname}
                type="text"
                className="text-black mr-3 rounded-lg mt-1 text-center p-2 outline-none"
              />
            </div>

            <div>
              <div className="mr-5 text-rose-600 dark:text-white">
                نام خانوادگی
              </div>
              <input
                value={lastname}
                onChange={handlerlastname}
                type="text"
                className="text-black mr-3 rounded-lg mt-1 text-center p-2 outline-none"
              />
            </div>
            <div>
              <div className="mr-5 text-rose-600 dark:text-white">
                شماره تماس{" "}
              </div>
              <input
                placeholder="09...."
                value={phonenumber}
                onChange={handlerphonenumber}
                type="tel"
                dir="ltr"
                className="text-black mr-3 rounded-lg mt-1 text-center p-2 outline-none"
              />
              <p
                className={
                  phonenumber.startsWith("09") && phonenumber.length == 11
                    ? "text-green-600  text-[12px] pr-4 mt-2"
                    : "text-red-800 dark:text-orange-600 pr-4 mt-2 text-[13px]"
                }
              >
                {phonenumber.startsWith("09") && phonenumber.length == 11 ? (
                  <FaCheckCircle className="text-[25px]" />
                ) : (
                  "شماره تماس نامعتبر می باشد"
                )}
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-3 flex-wrap justify-center ">
            <input
              value={answer}
              onChange={handleranswer}
              type="tel"
              className="text-black w-[30%] text-center outline-none py-1 rounded-lg"
            />

            <div className="mt-2">
              = {firstrandomnumber} + {secondrandomnumber}
            </div>
            <button onClick={generaterandomnumber}>
              {refreshrandomnumber}
            </button>
          </div>
          <div className="flex justify-around gap-x-[60px]  mt-[40px] mb-[20px]">
            <button
              disabled={
                firstname.length == 0 ||
                lastname.length == 0 ||
                !phonenumber.startsWith("09") ||
                phonenumber.length != 11
              }
              onClick={submit}
              className="disabled:bg-slate-300 disabled:text-gray-400 disabled:font-thin rounded-lg bg-orange-500  text-gray-100 font-bold py-2 px-4"
            >
              ثبت
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
