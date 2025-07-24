import React, { useEffect, useState } from "react";
import imglogo1 from "../Images/logo/1.jpg";
import imglogo2 from "../Images/logo/2.webp";
export default function Logo() {
  const [imageSrc, setImageSrc] = useState(imglogo1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1096) {
        setImageSrc(imglogo2);
      } else {
        setImageSrc(imglogo1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <img
        className="w-full h-[40px] sm:h-auto max-w-full object-cover"
        src={imageSrc}
      />
    </>
  );
}
