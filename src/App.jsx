import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
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
import ReactGA from "react-ga4";
import RouteChangeListener from "./RouteChangeListener"; // Import custom route tracker
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize Google Analytics with your tracking ID
    ReactGA.initialize("G-R5T84KTP11");
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
