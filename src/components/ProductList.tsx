import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const PRODUCTS_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCTS_PER_PAGE)
    .find();

  return (
    <div className="flex gap-x-6 gap-y-16 flex-wrap justify-between gap-32">
      {res.items.map((product: products.Product) => {
        return (
          <Link
            key={product._id}
            href={"/" + product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            <div className="relative h-72 w-full">
              <Image
                className="absolute rounded-lg object-cover hover:opacity-0 transition-opacity duration-200 z-10"
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt="product"
                sizes="25wv"
                fill
              />

              {product.media?.items && (
                <Image
                  className="absolute rounded-lg object-cover"
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt="product"
                  sizes="25wv"
                  fill
                />
              )}
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-lg">{product.name}</h3>
              <p className="font-semibold">${product.priceData?.price}</p>
            </div>

            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections?.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>

            <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-fit p-3 px-4 hover:bg-red-400 hover:text-white transition-colors duration-150">
              Add to cart
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
