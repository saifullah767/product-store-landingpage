import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    title: "Store Dashboard",
    description:
      "See all your key numbers in one clean view—products, active listings, and sales trends. Track what’s working at a glance so you can focus on the products and campaigns that actually bring in revenue.",
    imageSrc: "/dashboard.png",
    imageAlt: "StoreBuilder Dashboard",
  },
  {
    title: "Create Product in Seconds",
    description:
      "Quickly add new products with an intuitive interface that saves you time and effort. Customize details, upload images, and set prices in just a few clicks.",
    imageSrc: "/create-product.png",
    imageAlt: "Create product interface",
  },
  {
    title: "Organize with Smart Tags",
    description:
      "Use smart tags to categorize and manage your products effortlessly. Tags help you filter, search, and create targeted promotions, making your store more organized and efficient.",
    imageSrc: "/tag-creation.png",
    imageAlt: "Tag creation view",
  },
  {
    title: "Domain Settings",
    description:
      "Easily connect your custom domain to give your store a professional look and make it easy for customers to find you online. Manage DNS settings and SSL certificates with just a few clicks.",
    imageSrc: "/domain-setting.png",
    imageAlt: "Domain settings panel",
  },
  {
    title: "Design Your Store",
    description:
      "Customize the look and feel of your online store with easy-to-use design tools. Choose from a variety of templates, adjust colors, fonts, and layouts to match your brand identity.",
    imageSrc: "/store-build-image.png",
    imageAlt: "Store design preview",
  },
];

export function ProductFeatures(props: { direction?: 'left' | 'right' }) {

  const { direction = "left" } = props;

  // When direction === "right", reverse the order of columns
  const isRight = direction === "right";
  
  return (
      <section className="container mx-auto max-w-7xl sm:px-0 px-4">
        {/* <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Bring Your Storefront to Life
          </h2>
          <p className="text-xl text-gray-600">
           These live screenshots show the real tools you’ll use in the product.
          </p>
        </div> */}

        <div className="space-y-20 pb-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={feature.title}
                className=""
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                  {/* Image */}
                  <div className={isEven ? "sm:order-2" : ""}>
                    <div className="shadow-lg min-h-[220px] border border-slate-300 rounded">
                      <ImageWithFallback
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        className="rounded-xl w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`px-6 flex flex-col gap-2 ${
                      isEven ? "sm:order-1" : ""
                    }`}
                  >
                    {/* <p className="text-sm font-semibold text-blue-600">Feature</p> */}
                    <p className="font-bold text-3xl">{feature.title}</p>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>
  );
}