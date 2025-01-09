import React from "react";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export default function Contact() {
  return (
    <>
      <div className="dark:bg-slate-900  dark:text-white" dir="rtl">
        <div className="text bg-rose-600 dark:bg-gray-500 container-fluid  py-2">
          <h1 className=" text-center font-bold text-[20px] text-white">
            ارتباط با ما
          </h1>
        </div>
        <div className="grid place-items-center mt-3 mr-5  grid-cols-1 lg:grid-cols-2">
          <div className=" mt-5 flex flex-col gap-y-[30px]">
            <p className="font-bold text-red-600 dark:text-gray-100">
              ما شنوای نظرات شما هستیم
            </p>
            <div className="flex gap-x-3">
              <IoCall className="text-[30px] text-red-600 dark:text-white" />
              <p className="mt-1">تلفن پشتیبانی: 41016-۰۲۱</p>
            </div>

            <div className="flex gap-x-3">
              <MdMarkEmailUnread className="text-[30px] text-red-600 dark:text-white" />
              <p className="mt-1">info@dgland.com</p>
            </div>

            <div className="flex gap-x-3 flex-wrap">
              <FaLocationDot className="text-[30px] text-red-600 dark:text-white" />
              <p className="mt-1">
                خیابان حافظ ، بازار موبایل ایران ، طبقه 2 ، واحد 400 ، فروشگاه
                دی‌ جی‌ لند
              </p>
            </div>
            <div className="flex gap-x-3">
              <IoIosTime className="text-[30px] text-red-600 dark:text-white" />
              <p className="mt-1">همه روزه از ساعت ۹:۰۰ تا ۲۰:۰۰</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.4248708047844!2d51.44316107524761!3d35.61725103348686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f91fc161c34a54b%3A0x89ed60246299336f!2sTehran%20Province%2C%20Rey%2C%20District%2020%D8%8C%20Azadi%2C%20Iran!5e0!3m2!1sen!2s!4v1708093368306!5m2!1sen!2s"
            referrerPolicy="no-referrer-when-downgrade"
            className="pb-7 ml-5 my-3 rounded-lg dark:border-none h-[450px] smd:w-[280px] md:w-[560px] border-2 border-gray-300 "
            loading="lazy"
            height={450}
          ></iframe>
        </div>
      </div>
    </>
  );
}
