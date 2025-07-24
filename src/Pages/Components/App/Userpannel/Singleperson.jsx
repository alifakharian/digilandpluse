import { useParams } from "react-router-dom";
import { useSinglePerson } from "../../../../API/UserpannelApi";
import UserCart from "./UserCart";
import Loading from "../Products/Loading";

function Singleperson() {
  const { id } = useParams();
  const { data: singelperson, isLoading: loadingsingelperson } =
    useSinglePerson(id);
  if (loadingsingelperson) return <Loading />;
  return (
    <div className="p-4 dark:bg-slate-900 dark:text-white">
      <h2 className="text-xl font-bold mb-4">
        {singelperson.firstname} - {singelperson.lastname} : سبد خرید
      </h2>
      <UserCart />
    </div>
  );
}

export default Singleperson;
