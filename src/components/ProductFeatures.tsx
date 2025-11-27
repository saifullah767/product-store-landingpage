import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProductFeatures(props: { direction?: 'left' | 'right' }) {

  const { direction = "left" } = props;

  // When direction === "right", reverse the order of columns
  const isRight = direction === "right";
  
  return (
      <section className="container mx-auto max-w-7xl sm:px-0 px-4">
         <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Bring Your Storefront to Life
          </h2>
          <p className="text-xl text-gray-600">
           These live screenshots show the real tools you’ll use in the product.
          </p>
        </div>
        <div className="space-y-6" >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div className="sm:col-span-1 border border-slate-300 overflow-hidden shadow rounded-t-3xl sm:rounded-tl-3xl sm:rounded-tr-lg rounded-b-lg">
               <div className="shadow-lg min-h-[220px] " >
                <ImageWithFallback
                    src="/dashboard.png"
                    alt="StoreBuilder Dashboard"
                    className="rounded-xl"
                  />
               </div>
                <div className=" p-6 flex flex-col gap-1 "> 
                  <p className="text-sm font-semibold text-blue-600">Feature</p>
                  <p className="font-semibold"> Store Dashboard </p>
                  <p className="text-gray-600 text-sm "> See all your key numbers in one clean view—products, active listings, and sales trends. Track what’s working at a glance so you can focus on the products and campaigns that actually bring in revenue. </p>
                </div>
            </div>
            <div className="sm:col-span-1 border border-slate-300 overflow-hidden shadow sm:rounded-tr-3xl rounded-lg">
               <div className="shadow-lg min-h-[220px] " >
                <ImageWithFallback
                    src="/create-product.png"
                    alt="StoreBuilder Dashboard"
                    className="rounded-xl"
                  />
               </div>
                <div className=" p-6 flex flex-col gap-1 "> 
                  <p className="text-sm font-semibold text-blue-600">Feature</p>
                  <p className="font-semibold"> Create Product in Seconds </p>
                  <p className="text-gray-600 text-sm "> Quickly add new products with an intuitive interface that saves you time and effort. Customize details, upload images, and set prices in just a few clicks. </p>
                </div>
            </div>

          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="sm:col-span-1 border border-slate-300 shadow sm:rounded-bl-3xl rounded-lg">
               <div className="shadow-lg min-h-[220px] " >
                <ImageWithFallback
                    src="/tag-creation.png"
                    alt="StoreBuilder Dashboard"
                    className="rounded-xl"
                  />
               </div>
                <div className=" p-6 flex flex-col gap-1 "> 
                  <p className="text-sm font-semibold text-blue-600">Feature</p>
                  <p className="font-semibold"> Organize with Smart Tags </p>
                  <p className="text-gray-600 text-sm "> Use smart tags to categorize and manage your products effortlessly. Tags help you filter, search, and create targeted promotions, making your store more organized and efficient. </p>
                </div>
            </div>
            <div className="sm:col-span-1 border border-slate-300 shadow rounded-lg">
               <div className="shadow-lg min-h-[220px] " >
                <ImageWithFallback
                    src="/domain-setting.png"
                    alt="StoreBuilder Dashboard"
                    className="rounded-xl"
                  />
               </div>
                <div className=" p-6 flex flex-col gap-1 "> 
                  <p className="text-sm font-semibold text-blue-600">Feature</p>
                  <p className="font-semibold"> Domain Settings </p>
                  <p className="text-gray-600 text-sm "> Easily connect your custom domain to give your store a professional look and make it easy for customers to find you online. Manage DNS settings and SSL certificates with just a few clicks. </p>
                </div>
            </div>
            <div className="sm:col-span-1 border border-slate-300 shadow rounded-b-3xl sm:rounded-br-3xl sm:rounded-lg">
               <div className="shadow-lg min-h-[220px] " >
                <ImageWithFallback
                    src="/store-build-image.png"
                    alt="StoreBuilder Dashboard"
                    className="rounded-xl"
                  />
               </div>
                <div className=" p-6 flex flex-col gap-1 "> 
                  <p className="text-sm font-semibold text-blue-600">Feature</p>
                  <p className="font-semibold"> Design Your Store </p>
                  <p className="text-gray-600 text-sm "> 
                    Customize the look and feel of your online store with easy-to-use design tools. Choose from a variety of templates, adjust colors, fonts, and layouts to match your brand identity. </p>
                </div>
            </div>
          </div>
        </div>

          
          {/* <div  className={`col-span-1 ${
            isRight ? "md:order-2" : "md:order-1"
          }`}> 
            <div className="relative bg-white rounded-2xl shadow-2xl- p-2 border border-gray-200">
                <ImageWithFallback
                  src="/dashboard.png"
                  alt="StoreBuilder Dashboard"
                  className="rounded-xl"
                />
              </div>  
          </div>
          <div className={`col-span-1 flex flex-col justify-center ${
            isRight ? "md:order-1" : "md:order-2"
          }`}> 
            some detail  
          </div> */}
      </section>
  );
}