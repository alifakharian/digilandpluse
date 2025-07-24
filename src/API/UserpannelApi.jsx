import { useQuery } from "@tanstack/react-query";
import { Usermanagement } from "./ApiClient";

export const Postdata = async (newdata) => {
  const userData = {
    ...newdata,
    cartItems: [],
  };
  const res = await Usermanagement.post("/user", userData);
  return res.data;
};

const Showperson = () => Usermanagement.get("/user").then((res) => res.data);
// نمایش تمام افراد register شده
export const useUsers = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: Showperson,
  });

// نمایش تک تک افراد register
export const useSinglePerson = (personId) => {
  return useQuery({
    queryKey: ["user", personId],
    queryFn: async () => {
      const res = await Usermanagement.get(`/user/${personId}`);
      return res.data;
    },
    enabled: !!personId,
  });
};

//  حذف محصول با متد delete
export const deleteUser = async (userId) => {
  const response = await Usermanagement.delete(`/user/${userId}`);
  return response.data;
};
// بروز رسانی سبد خرید پس از خرید کاربر Register شده
