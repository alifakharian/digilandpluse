import { usePannelcontext } from "../Context/Userpannel";
import img1 from "../Images/login/1.jpg";

export default function Register() {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    firstrandomnumber,
    secondrandomnumber,
    resultcalcute,
  } = usePannelcontext();

  return (
    <>
      <div className="grid grid-cols-1 duration-700 dark:bg-slate-900 dark:text-white sm:grid-cols-2 align-items-center place-items-center px-3 gap-x-[20px] gap-y-3">
        <div className="py-[25px]">
          <img
            src={img1}
            className="rounded-lg size-[500px]"
            alt="Login Illustration"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="rounded-xl text-right pt-1 bg-gray-200 text-gray-900 font-black dark:border-none dark:text-white border-[2.5px] border-gray-400 dark:bg-blue-800"
            dir="rtl"
          >
            <div className="flex mt-4 gap-3 flex-wrap justify-center mx-3">
              <div>
                <div className="mr-5 text-rose-600 dark:text-white">نام</div>
                <input
                  {...register("firstname", {
                    required: "نام الزامی است",
                  })}
                  type="text"
                  className="mt-1 dark:text-gray-700 text-center p-2 w-full outline-none border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-400"
                />
                {errors.firstname && (
                  <p className="text-red-500 dark:text-orange-500 text-sm mt-1">
                    {errors.firstname.message}
                  </p>
                )}
              </div>

              <div>
                <div className="mr-5 text-rose-600 dark:text-white">
                  نام خانوادگی
                </div>
                <input
                  {...register("lastname", {
                    required: "نام خانوادگی الزامی است",
                  })}
                  type="text"
                  className="mt-1 dark:text-gray-700 text-center p-2 w-full outline-none border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-400"
                />

                {errors.lastname && (
                  <p className="text-red-500 dark:text-orange-500 text-sm mt-1">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
              <div>
                <div className="mr-5 text-rose-600 dark:text-white">
                  شماره تماس
                </div>
                <input
                  placeholder="09...."
                  {...register("cellphone", {
                    required: "شماره موبایل الزامی است",
                    pattern: {
                      value: /^09\d{9}$/,
                      message: "شماره موبایل معتبر نیست",
                    },
                    minLength: {
                      value: 11,
                      message: "شماره موبایل باید 11 رقم باشد",
                    },
                    maxLength: {
                      value: 11,
                      message: "شماره موبایل باید 11 رقم باشد",
                    },
                  })}
                  type="tel"
                  dir="ltr"
                  className="mt-1 p-2 dark:text-gray-700 w-full text-center outline-none border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-400"
                />
                {errors.cellphone && (
                  <p className="text-red-500 text-sm mt-1 dark:text-orange-500">
                    {errors.cellphone.message}
                  </p>
                )}

                <div className="mr-2 text-rose-600 dark:text-white mt-3">
                  ایمیل
                </div>
                <input
                  placeholder="example@domain.com"
                  dir="ltr"
                  {...register("email", {
                    required: "وارد کردن ایمیل الزامی است",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message:
                        "فرمت ایمیل معتبر نیست (مثال: example@domain.com)",
                    },
                  })}
                  className="mt-1 dark:text-gray-700 text-center p-2 w-full outline-none border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-400"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-orange-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5 flex gap-3 flex-wrap justify-center">
              <input
                // start
                {...register("calcute", {
                  required: "این فیلد الزامی است",
                  validate: (elem) => {
                    return +elem === resultcalcute || "حاصل جمع نادرست است!";
                  },
                })}
                type="number"
                className="text-black w-[10%] text-center focus:ring-2  outline-none focus:ring-blue-500 dark:focus:ring-pink-400 py-1 rounded-lg"
              />
              {errors.calcute && (
                <span className="text-red-600 dark:text-orange-500 text-[13px] mt-2">
                  {errors.calcute.message}
                </span>
              )}

              <p className="mt-2">
                = {firstrandomnumber} + {secondrandomnumber}
              </p>
            </div>
            <div className="flex justify-around gap-x-[60px]  bg mt-[40px] pb-3">
              <button className="bg-orange-500 text-gray-100 font-bold py-2 px-4 rounded-xl pb-3">
                ثبت
              </button>
            </div>
            {/* {resultcalcute} */}
          </div>
        </form>
      </div>
    </>
  );
}
