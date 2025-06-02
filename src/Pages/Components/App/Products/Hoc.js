import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../Hook/apiClient";

function Updatedcomponent(Originalcomponent) {
  function Newcomponent() {
    const { i } = useParams();
    const [singelproducts, setsingelproducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const productsingle = await apiClient.get(`/Product/${i}`);
          setsingelproducts(productsingle.data);
        } catch (error) {
          if (error) {
            console.log("Disconnect to API");
          }
        }
      };
      fetchData();
    }, []);

    return <Originalcomponent singelproducts={singelproducts} i={i} />;
  }
  return Newcomponent;
}

export default Updatedcomponent;
