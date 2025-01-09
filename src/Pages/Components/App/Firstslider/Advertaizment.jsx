import React from "react";
export default function Advertaizment() {
  return (
    <div className="dark:bg-slate-900 gap-3 grid grid-cols-1 lg:grid-cols-2 py-5 px-5">
      <div className="">
        <img
          className="rounded-lg"
          src={require("../Images/Advertaizment/1.jpeg")}
        />
      </div>
      <div className="">
        <img
          className="rounded-lg"
          src={require("../Images/Advertaizment/2.jpeg")}
        />
      </div>
    </div>
  );
}
