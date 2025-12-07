
export function ThankyouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 dark:bg-slate-800 dark:text-slate-100 bg-slate-200">
        <div className="w-full max-w-3xl text-center">
            <div className="mb-10 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-600/10 text-green-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a1 1 0 0 0 .99.81h11.72a1 1 0 0 0 .98-.79L23 6H6"></path>
                </svg>
                </div>
                <span className="font-semibold">Product<span className="text-green-600">Cart</span></span>
            </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight dark:text-slate-100">
            Thanks! You're on the list 🎉
            </h1>

            <p className="mt-4 text-sm sm:text-base dark:text-slate-300 max-w-2xl mx-auto">
            We've saved your details for <span className="text-green-600 font-semibold">15 Days Free Admin Dashboard</span>.
            As soon as your spot is ready, we'll email you an access link with simple steps to launch your store.
            </p>
        </div>
    </div>
  )}