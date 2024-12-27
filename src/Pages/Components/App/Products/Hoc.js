import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Updatedcomponent(Originalcomponent) {
  function Newcomponent() {
    const { i } = useParams();
    // console.log(i);
    const [singelproducts, setsingelproducts] = useState([]);
    const client = axios.create({
      baseURL: `https://67518882d1983b9597b34252.mockapi.io`,
    });
    const fetchData = async () => {
      try {
        const productsingle = await client.get(`/Product/${i}`);
        setsingelproducts(productsingle.data);
      } catch (error) {
        if (error) {
          console.log("Disconnect to API");
        } 
      }
    };
    useEffect(() => {
      fetchData();
    }, []);

    return <Originalcomponent singelproducts={singelproducts} i={i} />;
  }
  return Newcomponent;
}

export default Updatedcomponent;
