import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
//   console.log(products);
  const [latestProdcts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-600">
        Discover our freshest arrivals crafted with premium materials and designed to keep you stylish all year round. From casual essentials to statement pieces, each item is carefully curated to elevate your wardrobe.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
    {
        latestProdcts.map((item,index)=>(
            <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
    }
      </div>
    </div>
  );
};

export default LatestCollection;
