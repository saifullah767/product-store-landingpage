
export function MobileMockup() {
  return (
        <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950"></div>

            <div className="relative w-[340px] max-w-[90vw] mx-auto">
            <div className="absolute -left-2 top-24 h-10 w-1.5 rounded-full bg-slate-700/80"></div>
            <div className="absolute -left-2 top-40 h-16 w-1.5 rounded-full bg-slate-700/80"></div>
            <div className="absolute -right-2 top-32 h-16 w-1.5 rounded-full bg-slate-700/80"></div>

            <div className="rounded-[2.6rem] bg-slate-800/90 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.8)] border border-slate-700/70">
                <div className="relative rounded-[2.2rem] bg-slate-900 overflow-hidden">

                <div className="absolute inset-x-[90px] top-2 h-6 rounded-full bg-slate-800/95 flex items-center justify-center">
                    <div className="h-2 w-10 rounded-full bg-slate-900/60"></div>
                </div>

                <div className="pt-4 pb-2 px-5 flex items-center justify-between text-[11px] text-slate-400">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-3 rounded-sm bg-slate-500"></span>
                    <span className="h-1.5 w-3 rounded-sm bg-slate-500"></span>
                    <span className="h-3 w-5 rounded-sm border border-slate-500 flex items-center justify-end pr-[2px]">
                        <span className="h-1.5 w-2 rounded-sm bg-slate-500"></span>
                    </span>
                    </div>
                </div>

                <div
                    id="mobile-screen"
                    className="h-[640px] w-full px-5 pb-6 pt-2 bg-slate-900 text-slate-50 overflow-y-auto"
                >
                    {/* content will be here */}

                </div>

                </div>
            </div>
            </div>
        </div>
    ); 
}