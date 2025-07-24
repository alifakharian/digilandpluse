import { useState } from "react";
import "./style.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Categori from "./Categori.jsx";
import Advertaizment from "./Advertaizment.jsx";
import Mobilecellphone from "./Mobilecellphone.jsx";

const Slider = () => {
  const slides = [
    "https://res.cloudinary.com/dfhrcwv0i/image/upload/v1734597858/4_p7bquh.webp",
    "https://res.cloudinary.com/dfhrcwv0i/image/upload/v1734597841/3_susvyj.webp",
    "https://res.cloudinary.com/dfhrcwv0i/image/upload/v1734597700/2_dgvyi9.webp",
    "https://res.cloudinary.com/dfhrcwv0i/image/upload/v1734597615/1_wec7k5.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((elem) => (elem + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((elem) => (elem - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((elem, index) => (
            <div className="slide " key={index}>
              <div className="mx-auto 2xl:w-[1600px] 2xl:h-[300px] xl:h-[300px] xl:w-[1450px] lg:h-[300px] lg:w-[1180px] md:w-[1000px] md:h-[300px]  sm:h-[300px] smd:h-[300px]">
                <img className="w-[100%] h-[100%] object-cover" src={elem} />
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          <FaChevronCircleLeft className="text-gray-700 text-[30px] dark:text-gray-500" />
        </button>
        <button className="next" onClick={nextSlide}>
          <FaChevronCircleRight className="text-gray-700 text-[30px] dark:text-gray-500" />
        </button>
      </div>
      <Categori />
      <Advertaizment />
      <Mobilecellphone />
    </>
  );
};

export default Slider;
