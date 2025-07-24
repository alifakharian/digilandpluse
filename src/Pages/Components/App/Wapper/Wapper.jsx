import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../Menu/Menu.jsx";
import Products from "../Products/Products.jsx";
import Singleproduct from "../Products/Singleproduct.jsx";
import Footer from "../Footer/Footer.jsx";
import BasketShop from "../BasketShop/BasketShop.jsx";
import Firstslider from "../Firstslider/Firstslider.jsx";
import AppProviders from "../Context/AppProviders.jsx";
import SearchHeader from "../SearchHeader/SearchHeader.jsx";
import Contact from "../Contact/Contact.jsx";
import Logo from "../Logo/Logo.jsx";
import User from "../Userpannel/User.jsx";
import Notfound from "../Notfound/Notfound.jsx";
import Searchresult from "../SearchHeader/Searchresult.jsx";
import Register from "../Userpannel/Register.jsx";
import Allusers from "../Userpannel/Allusers.jsx";
import Singleperson from "../Userpannel/Singleperson.jsx";

export default function Wapper() {
  return (
    <>
      <BrowserRouter>
        <AppProviders>
          <Logo />
          <div className="top-0 sticky z-10">
            <Menu />
            <SearchHeader />
          </div>
          <Routes>
            <Route path="/Products" element={<Products />} />
            <Route path="/BasketShop" element={<BasketShop />} />
            <Route path="/Products/:i" element={<Singleproduct />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Searchresult" element={<Searchresult />} />
            <Route path="/User" element={<User />}></Route>
            <Route path="/Register" element={<Register />} />
            <Route path="/digilandpluse" element={<Firstslider />} />
            <Route path="/Allusers" element={<Allusers />} />
            <Route path="/Allusers/:id" element={<Singleperson />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
          <Footer />
        </AppProviders>
      </BrowserRouter>
    </>
  );
}
