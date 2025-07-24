import img1 from "../Images/mobilecellphone/1.jpeg";
import img2 from "../Images/mobilecellphone/2.jpeg";
import img3 from "../Images/mobilecellphone/3.jpeg";

export default function Mobilecellphone() {
  return (
    <div className="dark:bg-slate-900 dark:text-white pt-[20px]">
      <h1 className="text-center pt-4 dark:text-white text-gray-700 text-[22px]">
        گوشی موبایل
      </h1>
      <div
        className="mt-5 mx-4 place-items-center pb-10 gap-5
       grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
      >
        <div>
          <img src={img1} className="rounded-lg" />
        </div>
        <div>
          <img src={img2} className="rounded-lg" />
        </div>
        <div>
          <img src={img3} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
