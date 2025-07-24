import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { deleteUser, Postdata } from "../../../../API/UserpannelApi.jsx";
import { useShoppingcardcontext } from "./ShoppingCard.jsx";

const Contextuserpannel = createContext();

export const usePannelcontext = () => {
  return useContext(Contextuserpannel);
};

const Userpannel = ({ children }) => {
  const { setcarditems } = useShoppingcardcontext();

  const [isLogin, setisLogin] = useState(() => {
    // مقدار اولیه رو از localStorage بخون
    const saved = localStorage.getItem("isLogin");
    return saved === "true";
  });
  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  // اعداد تصادفی برای محاسبه
  const [firstrandomnumber] = useState(Math.floor(Math.random() * 10));
  const [secondrandomnumber] = useState(Math.floor(Math.random() * 10) + 12);
  const resultcalcute = firstrandomnumber + secondrandomnumber;

  // رصد تغییرات فیلدها
  // const firstname = useWatch({ control, name: "firstname" });
  // const lastname = useWatch({ control, name: "lastname" });
  // const cellphone = useWatch({ control, name: "cellphone" });
  // const email = useWatch({ control, name: "email" });
  // const calcute = useWatch({ control, name: "calcute" });
  // setcarditems

  const navigate = useNavigate();

  // اضافه کردن افراد
  const addmutation = useMutation({
    mutationFn: Postdata,
  });

  const onSubmit = async (data) => {
    if (parseInt(data.calcute) === resultcalcute) {
      try {
        const res = await addmutation.mutateAsync(data); // صبر کن تا post انجام بشه
        localStorage.setItem("userId", res.id); // ذخیره id کاربر جدید

        navigate("/User");
      } catch (error) {
        console.error("ثبت‌نام با خطا مواجه شد:", error);
      }
      setisLogin(true);
      reset({});
    }
  };

  // تابع حذف کاربر
  const queryClient = useQueryClient();
  const deletemutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const deletesingleuser = (productId) => {
    deletemutation.mutate(productId);
  };
  // تابع خروج
  const logout = () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      localStorage.removeItem(`cardItems_${userId}`);
      localStorage.removeItem("userId");
    }
    setcarditems([]); // فقط برای پاک کردن وضعیت فعلی UI
    setisLogin(false);
    navigate("/Register");
  };
  

  return (
    <Contextuserpannel.Provider
      value={{
        register,
        errors,
        handleSubmit,
        onSubmit,
        firstrandomnumber,
        secondrandomnumber,
        resultcalcute,
        deletesingleuser,
        isLogin,
        logout,
      }}
    >
      {children}
    </Contextuserpannel.Provider>
  );
};

export { Userpannel };


