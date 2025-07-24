import img1 from "../Images/categori/1.jpeg";
import img2 from "../Images/categori/2.jpeg";
import img3 from "../Images/categori/3.jpeg";
import img4 from "../Images/categori/4.jpeg";
import img5 from "../Images/categori/5.jpeg";
import img6 from "../Images/categori/6.jpeg";
import img7 from "../Images/categori/7.jpeg";

export default function Categori() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white py-3">
        <h1 className="text-center">دسته بندی های پر بازدید</h1>
        <div className="flex flex-wrap justify-center gap-x-[80px] gap-y-10 mt-5 ">
          <div className="">
            <img src={img1} className="rounded-full" />
            <p className="text-center mt-3">شارژ و پاوربانک</p>
          </div>
          <div>
            <img src={img2} className="rounded-full" />
            <p className="text-center mt-3">تجهیزات ذخیره سازی</p>
          </div>
          <div>
            <img src={img3} className="rounded-full" />
            <p className="text-center mt-3">ساعت هوشمند</p>
          </div>
          <div>
            <img src={img4} className="rounded-full" />
            <p className="text-center mt-3">اسپیکر و بلند گو</p>
          </div>
          <div>
            <img src={img5} className="rounded-full" />
            <p className="text-center mt-3">هدفون و هندزفری</p>
          </div>
          <div>
            <img src={img6} className="rounded-full" />
            <p className="text-center mt-3">گوشی موبایل</p>
          </div>
          <div>
            <img src={img7} className="rounded-full" />
            <p className="text-center mt-3">لب تاب</p>
          </div>
        </div>
      </div>
    </>
  );
}
