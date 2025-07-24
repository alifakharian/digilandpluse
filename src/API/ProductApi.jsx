import { useQuery } from "@tanstack/react-query";
import ApiClient from "./ApiClient.jsx";

const ShowProducts = () => ApiClient.get("/Product").then((res) => res.data);
// نمایش کل محصولات
export const useProducts = () =>
  useQuery({
    queryKey: ["/Product"],
    queryFn: ShowProducts,
  });

export const Showsingleproduct = (productId) => {
  return useQuery({
    queryKey: ["/Product", productId],
    queryFn: () =>
      ApiClient.get(`/Product/${productId}`).then((res) => res.data),
    enabled: !!productId,
  });
};
