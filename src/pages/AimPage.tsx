export function AimPage() {
  const aims = [
    {
      title: "Empower entrepreneurs",
      copy: "Give solo founders and small teams a world-class commerce stack without enterprise budgets.",
    },
    {
      title: "Automate the boring tasks",
      copy: "Inventory syncing, marketing snippets, conversion tracking - everything should just work.",
    },
    {
      title: "Make design effortless",
      copy: "Every template is responsive, accessible, and optimized for conversion out of the box.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-600 font-semibold">Our Aim</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
          Build the fastest path from idea to revenue.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          We are focused on removing friction at every step of the commerce journey: onboarding, catalog
          creation, payments, and customer engagement. If a workflow slows you down, we automate it or remove it.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {aims.map((aim) => (
            <div key={aim.title} className="rounded-2xl border border-slate-100 shadow-sm p-6 bg-gradient-to-br from-white to-slate-50">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">{aim.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{aim.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-purple-100 bg-purple-50/60 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-500 mb-4">Promise</p>
          <p className="text-2xl md:text-3xl text-slate-900 font-semibold">
            If it does not create measurable value for your store, it does not ship.
          </p>
        </div>
      </div>
    </section>
  );
}
