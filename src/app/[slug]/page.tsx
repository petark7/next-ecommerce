import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";

const SinglePage = async ({ params }: { params: { slug: any } }) => {
  const slug = params.slug;
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="flex flex-col md:flex-row gap-10 px-4 py-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* IMAGES */}
      <div className="md:w-1/2">
        <ProductImages images={product.media?.items} />
      </div>

      {/* TITLE, DESC & OPTIONS */}
      <div className="md:w-1/2">
        <div className="flex flex-col">
          <h1 className="mb-5 text-3xl font-semibold">{product.name}</h1>
          <div className="text-sm text-gray-600">{product.description}</div>

          <hr className="h-px mt-8 mb-4 bg-gray-200 border-0" />

          <div className="text-2xl">
            {product.priceData?.price === product.priceData?.discountedPrice ? (
              <span>{product.priceData?.formatted?.price}</span>
            ) : (
              <div>
                <span className="text-xl text-gray-400 line-through pr-4">
                  {product.priceData?.formatted?.price}
                </span>
                <span>{product.priceData?.formatted?.discountedPrice}</span>
              </div>
            )}
          </div>

          {/* PRICING */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 font-semibold text-2xl items-center"></div>

            <CustomizeProduct productOptions={product.productOptions} />
          </div>
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0" />

        {/* DETAILED DESCRIPTION, REFUND POLICY AND SHIPPING */}
        <div className="flex flex-col gap-8">
          {product.additionalInfoSections?.map((section: any) => {
            return (
              <div key={section.title} className="flex flex-col gap-2">
                <h4 className="font-semibold uppercase">{section.title}</h4>
                <div>{section.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
