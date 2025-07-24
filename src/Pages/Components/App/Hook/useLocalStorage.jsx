// import { useEffect, useState } from "react";
// export const useLocalstorage = (key, initialvalue) => {
//   const [value, setValue] = useState(() => {
//     const stored = localStorage.getItem(key);
//     return stored !== null ? JSON.parse(stored) : initialvalue;
//   });
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//   return [value, setValue];
// };
import { useEffect, useState } from "react";

export const useLocalstorage = (key, initialvalue) => {
  const getInitial = () => {
    try {
      const stored = localStorage.getItem(key);
      return stored
        ? JSON.parse(stored)
        : typeof initialvalue === "function"
        ? initialvalue()
        : initialvalue;
    } catch (err) {
      console.error("خطا در خواندن localStorage:", err);
      return typeof initialvalue === "function" ? initialvalue() : initialvalue;
    }
  };

  const [value, setValue] = useState(getInitial);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("خطا در ذخیره localStorage:", err);
    }
  }, [key, value]);

  const remove = () => {
    localStorage.removeItem(key);
    setValue(initialvalue);
  };

  return [value, setValue, remove];
};
