// cardItems;

import { useEffect } from "react";
import { useState } from "react";

export const useLocalstorage = (key, initialvalue) => {
  const [value, setvalue] = useState(() => {
    let localCard = localStorage.getItem("cardItems");
    if (localCard != null) {
      return JSON.parse(localCard);
    } else {
      return initialvalue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setvalue];
};

