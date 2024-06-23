import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import "./CSS/index.css";
import Mockman from "mockman-js";
import Navbar from "./components/Navbar/Nav";
import Footer from "./components/footer/Footer";
import Main from "./pages/home/Main";
import Discription from "./pages/singleProduct/Discription";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import Electronics from "./pages/electronics/Electronics";
import Sign from "./pages/signin/Sign";
import Cart from "./pages/cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WishlistPage from "./pages/wishlist/Wishlist";
import Shop from "./pages/shop/Shop";
import Profile from "./pages/profile/Profile";
import Addresses from "./components/addresses/Addresses";
import Signup from "./pages/signup/Signup";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";
import Order from "./pages/orders/Orders";
import PaymentHistory from "./pages/payment/PaymentHistory";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-product/:id" element={<Discription />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/payment" element={<PaymentHistory />} />

      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
