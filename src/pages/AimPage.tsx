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
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 font-semibold">Our Aim</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
          Build the fastest path from idea to revenue.
        </h1>

        <p className="text-xl font-bold text-slate-600 pt-4">
          This project started with a simple picture in mind.
        </p>
        <span className="text-gray-600">
          <p className=" leading-relaxed font-semibold py-8">
            A woman sitting at her dining table late at night, packing orders while her family sleeps.
            Her living room is her warehouse, her phone is her office, and her Instagram or WhatsApp
            is her “store.” She’s talented, hardworking, and pouring her heart into every product she
            sells — but her business still looks like “just a page,” not the brand it truly is.
          </p>

          <p className=" leading-relaxed">
            Like her, there are so many people quietly building something from home.
          </p>

          <p className=" leading-relaxed py-8 font-semibold">
            - Mothers who want to contribute without leaving their kids. <br></br> 
            - Students trying to pay their fees. <br></br>
            - Sons and daughters supporting their parents. <br></br> 
            - Creators who turn their skills into side-income,
              one order at a time.
          </p>

          <p className="text-emerald-400 font-semibold leading-relaxed pb-0 border-b-2 w-fit mb-4">
            "We built this Store for all of them."
          </p>

          <p className="leading-relaxed">
            For anyone who is packing orders in a corner of their room, answering DMs between chores,
            and dreaming of taking their business one step further. Our aim is to give these small,
            home-grown brands the same dignity and professionalism as any big store — without the stress,
            the jargon, or the huge cost.
          </p>

          <p className="leading-relaxed">
            This Store is more than a website. It’s a small bridge between “I sell from home” and
            “I run a real brand.”
          </p>
        </span>

        <div className="space-y-4 pt-6">
          <h3 className="text-xl font-bold text-slate-600 pb-2">
            What we want this Store to do for you
          </h3>

          <ul className="space-y-2 text-sm leading-relaxed list-disc list-inside font-semibold text-slate-600">
            <li>
              Turn “DM to order” into a real store link you can proudly share with customers, family, and friends.
            </li>
            <li>
              Give your business a professional face, so people trust you faster and see your products as premium.
            </li>
            <li>
              Help you grow beyond one app or inbox, so your business doesn’t depend on a single platform.
            </li>
            <li>
              Save you time and mental load, by bringing your products, orders, and brand into one organized place.
            </li>
            <li>
              Make you feel like a true brand owner, confident in sharing your store with anyone, anywhere.
            </li>
            <li>
              Open doors for future growth, whether it’s more customers, collaborations, or turning your side hustle into your main income.
            </li>
          </ul>

          <p className="text-sm leading-relaxed">
            Our aim is simple: to give every small seller, creator, and home-based business a Store that reflects
            their hard work, their dreams, and the future they’re building for their families.
          </p>
        </div>
      </div>

    </section>
  );
}
