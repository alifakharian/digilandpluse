import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../Menu/Menu.jsx";
import Products from "../Products/Products.jsx";
import Singleproduct from "../Products/Singleproduct.jsx";
import Footer from "../Footer/Footer.jsx";
import BasketShop from "../BasketShop/BasketShop.jsx";
import Firstslider from "../Firstslider/Firstslider.jsx";
import AppProviders from "../Context/AppProviders.js";
import Search from "../Search/Search.jsx";
import Contact from "../Contact/Contact.jsx";
import Searchresult from "../Search/Searchresult.jsx";
import Logo from "../Logo/Logo.jsx";
import Login from "../Login/Login.jsx";
import User from "../Login/User.jsx";

export default function Wapper() {
  return (
    <>
      <BrowserRouter>
        <AppProviders>
          <Logo />
          <div className="top-0 sticky z-10">
            <Menu />
            <Search />
          </div>
          <Routes>
            <Route path="/Products" element={<Products />} />
            <Route path="/BasketShop" element={<BasketShop />} />
            <Route path="/Products/:i" element={<Singleproduct />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Searchresult" element={<Searchresult />} />
            <Route path="/User" element={<User />}></Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/digilandpluse" element={<Firstslider />} />
          </Routes>
          <Footer />
        </AppProviders>
      </BrowserRouter>
    </>
  );
}
