import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import AllergyAdvice from "./Pages/AllergyAdvice";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navigation from "./Navbar/Navigation";
import Footer from "./Navbar/Footer";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import Login from "./Login and SignUp/Login";
import SignUp from "./Login and SignUp/SignUp";
import Payment from "./Payment/Payment";
import Failure from "./Payment/Failure";
import Success from "./Payment/Success";
import Profile from "./Login and SignUp/Profile";
import Protected from "./Login and SignUp/Protected";
import TermsAndConditions from "./Legals/TermsAndConditions";
import PrivacyPolicy from "./Legals/PrivacyPolicy";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/productdetails/:productID" element={<ProductDetails />} />

        <Route path="/allergyadvice" element={<AllergyAdvice />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/payment"
          element={<Protected component={<Payment />} />}
        />
        <Route path="/failure" element={<Failure />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/profile"
          element={<Protected component={<Profile />} />}
        />
         <Route
          path="/terms&conditions"
          element={<Protected component={<TermsAndConditions />} />}
        />
        <Route
          path="/privacypolicy"
          element={<Protected component={<PrivacyPolicy />} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
