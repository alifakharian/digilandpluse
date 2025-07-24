import { useParams } from "react-router-dom";

import Loading from "./Loading";
import { Showsingleproduct } from "../../../../API/ProductApi";

function Updatedcomponent(Originalcomponent) {
  function Newcomponent() {
    const { i } = useParams();
    const { data: singelproducts, isLoading, error } = Showsingleproduct(i);

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching product</div>;

    return <Originalcomponent singelproducts={singelproducts} i={i} />;
  }
  return Newcomponent;
}

export default Updatedcomponent;
