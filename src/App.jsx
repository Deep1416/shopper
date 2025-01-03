import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Cart,
  Category,
  Home,
  Login,
  LoginSingup,
  Product,
  Whislist,
} from "./pages";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import RouteChangeListener from "./RouteChangeListener";
function App() {
  useEffect(() => {
    ReactGA.initialize("G-R5T84KTP11");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "App.jsx",
    });
  }, []);
  return (
    <Router>
      <RouteChangeListener /> {/* Tracks route changes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mens"
          element={<Category banner={men_banner} items="men" />}
        />
        <Route
          path="/womens"
          element={<Category banner={women_banner} items="women" />}
        />
        <Route
          path="/kids"
          element={<Category banner={kid_banner} items="kid" />}
        />
        <Route path="product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<LoginSingup />} />
        <Route path="/whislist" element={<Whislist />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;
