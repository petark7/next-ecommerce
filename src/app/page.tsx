import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

const HomePage = async () => {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   };

  //   getProducts();
  // }, [wixClient]);

  const wixClient = await wixClientServer();
  const res = await wixClient.products.queryProducts().find();

  console.log(res);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="text-2xl mb-12">Featured Products</div>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
    </div>
  );
};

export default HomePage;
