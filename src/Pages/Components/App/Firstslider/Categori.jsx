import React from "react";

export default function Categori() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white py-3">
        <h1 className="text-center">دسته بندی های پر بازدید</h1>
        <div className="flex flex-wrap justify-center gap-x-[80px] gap-y-10 mt-5 ">
          <div className="">
            <img
              src={require("../Images/categori/1.jpeg")}
              className="rounded-full"
            />
            <p className="text-center mt-3">شارژ و پاوربانک</p>
          </div>
          <div>
            <img
              src={require("../Images/categori/2.jpeg")}
              className="rounded-full"
            />
            <p className="text-center mt-3">تجهیزات ذخیره سازی</p>
          </div>
          <div>
            <img
              src={require("../Images/categori/3.jpeg")}
              className="rounded-full"
            />
            <p className="text-center mt-3">ساعت هوشمند</p>
          </div>
          <div>
            <img
              src={require("../Images/categori/4.jpeg")}
              className="rounded-full"
            />
            <p className="text-center mt-3">اسپیکر و بلند گو</p>
          </div>
          <div>
            <img
              src={require("../Images/categori/5.jpeg")}
              className="rounded-full"
            />
            <p className="text-center mt-3">هدفون و هندزفری</p>
          </div>
          <div>
            <img
              src={require("../Images/categori/6.jpeg")}
              className="rounded-full"
            />
            <p className="text-center mt-3">گوشی موبایل</p>
          </div>
          <div>
            <img
              src={require("../Images/categori/7.jpeg")}
              className="rounded-full"
            />
            <p className="text-center mt-3">لب تاب</p>
          </div>
        </div>
      </div>
    </>
  );
}
