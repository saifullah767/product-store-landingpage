
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

        <div className="sr-only">
          <div className="ps-access-overlay fixed inset-0 bg-slate-900/80 opacity-0 pointer-events-none flex items-center justify-center transition duration-200 ease-out z-[9997]">

          </div>
           <div className="relative w-full sm:max-w-[600px] mx-5 rounded-md shadow-xl border border-slate-200 bg-purple-50">
                <button className="absolute right-4 top-3 text-xs font-semibold text-slate-400 hover:text-slate-600 ps-access-close" aria-label="Close" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x size-6"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                <div className="px-10 pt-10 pb-6 text-center">

                    <div className="mx-auto mb-4 h-10 w-10 rounded-md bg-purple-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-store-icon lucide-store text-white size-7"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"/><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/></svg>
                    </div>

                    <span className="inline-flex items-center gap-x-0.5 rounded-md bg-green-50 px-2 py-1 text-xs text-green-700 inset-ring inset-ring-green-600/20">
                        Earlybird Access
                    </span>

                    <h2 className="text-lg font-semibold text-slate-900 my-4">
                        Get Early Access & Launch Your Online Store to Boost Sales!
                    </h2>
                    <form className="text-left space-y-3 ps-access-form">
                        <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Name
                        </label>
                        <input
                            name="name" type="text" placeholder="Your name" required
                            className="w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        </div>
                        <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Email Address
                        </label>
                        <input
                            name="email" type="email" placeholder="you@example.com"
                            className="w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        </div>

                        <div className="flex items-center justify-center w-full mt-4">
                            <button type="submit" className="w-1/2 rounded-sm bg-purple-600 cursor-pointer text-white text-sm font-medium py-2 hover:bg-purple-700" > 
                                Get Owner Access 
                            </button>

                        </div>
                    </form>

                    <p className="mt-4 text-[10px] text-slate-500">
                        Limited earlybird spots available — we’ll email you with your access link.
                    </p>

                </div>
                <p className="ps-access-feedback text-xs text-red-500 min-h-[1.25rem] ml-5 mb-5" aria-live="polite"></p>
            </div> 
        </div>

      <Footer />
    </div>
  );
}
