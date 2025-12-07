import { Link, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { AboutPage } from "./pages/AboutPage";
import { AimPage } from "./pages/AimPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { ThankyouPage } from './pages/Thankyou';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">Page not found</h1>
      <p className="text-slate-600 mb-8 max-w-md">
        We could not find the page you were looking for. Use the navigation above or head back home to
        continue exploring StoreBuilder.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-500 transition-colors"
      >
        Go to homepage
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-aim" element={<AimPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/thank-you" element={<ThankyouPage />} />
    </Routes>
  );
}
