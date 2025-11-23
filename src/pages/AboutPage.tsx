export function AboutPage() {
  const milestones = [
    {
      title: "2019",
      description: "Started as a small tooling project helping indie sellers publish catalogues faster."
    },
    {
      title: "2021",
      description: "Launched StoreBuilder beta with automated product tagging and analytics."
    },
    {
      title: "2024",
      description: "Powered 10,000+ stores worldwide and processed millions in revenue for our merchants."
    }
  ];

  return (
    <div className="py-16 bg-slate-50">
      <section className="container mx-auto px-4 max-w-4xl space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold">Our Story</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
          Helping merchants launch and scale stores in days, not months.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          StoreBuilder started with a simple idea: remove every technical blocker between a product idea and
          a functioning storefront. We pair thoughtful design, opinionated defaults, and automation to build
          delightful commerce experiences so you can focus on your customers.
        </p>
        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {milestones.map((milestone) => (
            <div key={milestone.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <p className="text-sm font-semibold text-blue-600">{milestone.title}</p>
              <p className="mt-3 text-slate-700 text-sm leading-relaxed">{milestone.description}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 pt-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">What drives us</h2>
            <p className="text-slate-600 leading-relaxed">
              We obsess over speed, clarity, and measurable growth. Every feature we ship is tested with
              real sellers and measured against revenue impact. Your success metrics guide our roadmap.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Where we are headed</h2>
            <p className="text-slate-600 leading-relaxed">
              AI-assisted merchandising, instant storefront themes, and multi-channel distribution are next.
              Join the journey early and influence what we build.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
