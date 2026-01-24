
import { Footer } from "./Footer";
import { TheHeader } from "./TheHeader";
import { CountdownTimer } from "./CountdownTimer";
import { Outlet } from "react-router-dom";


export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
 
      {/* <CountdownTimer /> */}
      <TheHeader />

      <main className="flex-1">
        <Outlet />
        
      </main>

        <div className="sr-only">
            <div className="ps-access-overlay fixed inset-0 bg-slate-900/80 opacity-0 pointer-events-none flex items-center justify-center transition duration-200 ease-out z-[9997]">
            <div 
                className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl"
            >
                <button
                    type="button"
                    className="absolute ps-access-close right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    aria-label="Close access popup"
                >
                ✕
                </button>

                <div className="grid md:grid-cols-2 grid-cols-1 dark:text-white">
                    <div></div>

                    <div className="dark:bg-slate-900 bg-white px-6 py-4">
                        <div className="flex flex-col gap-3">
                            <div className="inline-flex items-center gap-2 text-lg font-semibold">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a1 1 0 0 0 .99.81h11.72a1 1 0 0 0 .98-.79L23 6H6"></path>
                                    </svg>
                                </div>
                                <span className="font-semibold">Product<span className="text-emerald-500">Cart</span></span>
                            </div>
                        </div>

                        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold">
                            Get Access to Your Online Store Dashboard
                        </h2>

                        <p className="mt-3 text-sm dark:text-slate-300 text-slate-600">
                            Launch your online store to boost sales.
                            <br></br>
                            Fill the form to get
                            <span className="font-semibold dark:text-emerald-300 text-emerald-600  border-b-2 border-dotted border-emerald-300 pb-0.5">
                                15 days free access
                            </span>
                        </p>

                        <form className="mt-6 space-y-4 ps-access-form">
                            <div>
                                <label htmlFor="access-name" className="block text-sm font-medium"> Name </label>
                                <input type="text" name="name" placeholder="Your name" className="mt-1 block w-full rounded-lg border dark:border-slate-600 border-slate-200 dark:bg-slate-800 bg-slate-100 px-3 py-2.5 text-sm text-slate-50 placeholder-slate-400 outline-none transition focus:border-emerald-400 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500/40" required />
                            </div>

                            <div>
                                <label htmlFor="access-email" className="block text-sm font-medium"> Email Address </label>
                                <input type="email" name="email" placeholder="you@example.com" className="mt-1 block w-full rounded-lg border dark:border-slate-600 border-slate-200 dark:bg-slate-800 bg-slate-100 px-3 py-2.5 text-sm text-slate-50 placeholder-slate-400 outline-none transition focus:border-emerald-400 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500/40" required />
                            </div>

                            <button
                                type="submit"
                                className="mt-3 cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold dark:text-slate-900 text-white transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            >
                                <span>Get Admin Access</span>
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>

                            <p className="ps-access-feedback text-xs text-red-500 min-h-[1.25rem] ml-5 mb-5" aria-live="polite"></p>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>

      <Footer />
    </div>
  );
}
