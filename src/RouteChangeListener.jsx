import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function RouteChangeListener() {
  const location = useLocation();

  useEffect(() => {
    // Send pageview on every route change
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title || "React App",
    });

    // Log custom events for specific routes
    switch (location.pathname) {
      case "/mens":
        ReactGA.event({
          category: "Navigation",
          action: "Visited Men's Category",
        });
        break;
      case "/womens":
        ReactGA.event({
          category: "Navigation",
          action: "Visited Women's Category",
        });
        break;
      case "/kids":
        ReactGA.event({
          category: "Navigation",
          action: "Visited Kids' Category",
        });
        break;
      case "/cart":
        ReactGA.event({
          category: "Ecommerce",
          action: "Viewed Cart",
        });
        break;
      case "/whislist":
        ReactGA.event({
          category: "Wishlist",
          action: "Viewed Wishlist",
        });
        break;
      default:
        // Optional: Add default handling for other routes
        break;
    }
  }, [location]);

  return null; // This component doesn't render anything
}

export default RouteChangeListener;
