import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
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

    // If gtag isn't available for some reason, just skip.
    if (!window.gtag) {
      console.log("gtag not found, skipping page view tracking");
      return;
    } 

    // Send a GA4 page_view for SPA route changes
    window.gtag("event", "page_view", {
      page_title: pageTitle,
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [location.pathname, location.search]);

  return null;
}