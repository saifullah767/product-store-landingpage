import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    title: "Product Management",
    details: [
      { label: "Create & update products fast", description: "Add product name, description, images, and all key details from a simple form." },
      { label: "Pricing & inventory control", description: "Set price, discount (%), stock, and toggle active/inactive anytime." },
      { label: "Organize with categories", description: "Create categories and assign them to products so customers can find items quickly." },
      { label: "Media upload ready", description: "Upload product images to build a professional product listing experience." },
    ],
    imageSrc: "/features-img/10.png",
    imageAlt: "Product Management",
  },
  {
    title: "Store Design & Customization",
    details: [
      { label: "Brand basics (and SEO-ready)", description: "Set your store name, description, and icon—these are used across your storefront and help with search/SEO and sharing." },
      { label: "Hero section setup", description: "Upload multiple banner images, choose the banner view, and attach links to drive visitors to featured products, categories, or promotions." },
      { label: "Theme that matches your brand", description: "Customize your store’s look with a clean theme editor: Background color, Primary color, Text, heading, and sub-heading colors" },
      { label: "Quick preview while designing", description: "See changes instantly with a live preview (Laptop/Mobile view) so you can confidently publish without guessing." },
    ],
    imageSrc: "/features-img/11.png",
    imageAlt: "Store Design & Customization",
  },
  {
    title: "Page Management, WhatsApp Checkout & Domain Settings",
    details: [
      { label: "Show / hide store pages", description: "Decide which pages appear in your store navigation—like Home, Products, About, and Contact—so your storefront stays clean and focused." },
      { label: "WhatsApp checkout (orders directly in chat)", description: "Add your WhatsApp number and let customers place orders by messaging you instantly. Perfect for fast confirmations, custom requests, and COD workflows." },
      { label: "Theme that matches your brand", description: "Customize your store’s look with a clean theme editor: Background color, Primary color, Text, heading, and sub-heading colors" },
      { label: "Update your store domain", description: "Edit your store link/slug (example: my.product-cart.store/your-store-name) with built-in domain rules, so your URL stays professional, readable, and shareable." },
    ],
    imageSrc: "/features-img/12.png",
    imageAlt: "Page Management & WhatsApp Checkout",
  },
  {
    title: "Store Front Pages",
    details: [
      { label: "Home Page (Category-based browsing)", description: "A clean landing page with an auto-scroll hero banner that highlights your latest offers or category visuals. Customers can quickly browse by categories, search products, and jump into collections without effort." },
      { label: "All Products Page (Full catalog view)", description: "A dedicated All Products screen that gives a better, scroll-friendly view of your entire inventory—perfect for customers who want to explore everything in one place." },
      { label: "Product Detail Page (Clear info + pricing)", description: "A polished product page that shows: Product image and description, Categories,  Price + discount (if applied), Stock status (In stock / Out of stock), Actions like Add to cart and Share, This makes decision-making easy and increases conversions." },
    ],
    description:
      "Give your customers a smooth, modern shopping experience from the first click to the final “Add to cart.” Your storefront includes beautifully designed pages that help visitors discover products faster, understand details clearly, and buy with confidence.",
    imageSrc: "/features-img/13.png",
    imageAlt: "Store Front Pages",
  },
  {
    title: "How customer will checkout",
    details: [
      { label: "Review cart before paying", description: "Customers see all selected items with images, prices, and quantity controls. They can easily increase/decrease quantity or remove items before placing the order." },
      { label: "Quick delivery details", description: "Collect essential info with a simple form: Full name, phone (and optional email), Address, area, city (and optional landmark/postal code)" },
      { label: "Two checkout options", description: "Place Order (COD): Customers submit the order directly from the checkout page, Checkout via WhatsApp: One tap sends the order details to your WhatsApp so you can confirm instantly, handle custom requests, and finalize delivery." },
      { label: "Saved details for faster repeat orders", description: "The checkout can save customer details on the device to make next orders quicker (with an option to clear saved data)." },
    ],
    description:
      "A fast, clean checkout experience designed for mobile shoppers. Customers can review their cart, enter delivery details, and place an order in seconds—either through Cash on Delivery (COD) or WhatsApp Checkout for instant confirmation.",
    imageSrc: "/features-img/14.png",
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
                    <div className="shadow-lg- min-h-[220px] border- border-slate-300- rounded-">
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
                    <div>
                      {feature.details && feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="mt-2">
                          <p className="text-sm font-semibold text-slate-900">{detail.label}</p>
                          <p className="text-sm text-slate-600">{detail.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>
  );
}