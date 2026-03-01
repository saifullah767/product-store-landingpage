import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-RNGW76T88Y";

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/features": "Features",
  "/pricing": "Pricing",
  "/about": "About",
  "/our-aim": "Our Aim",
  "/thank-you": "Thank You",
};

export function PageTracking() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = pageTitles[location.pathname] ?? "Product Cart";

    document.title = pageTitle;

    if (!window.gtag) return;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      page_title: pageTitle,
    });
  }, [location.pathname, location.search]);

  return null;
}
