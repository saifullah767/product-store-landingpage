
import { Footer } from "./Footer";
import { TheHeader } from "./TheHeader";
import { CountdownTimer } from "./CountdownTimer";
import { Outlet } from "react-router-dom";


export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
 
      <CountdownTimer />
      <TheHeader />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
