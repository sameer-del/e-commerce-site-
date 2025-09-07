import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
    
  }, []);
  console.log(latestProducts);
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <div>
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"COLLECTION"} />
      </div>{" "}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;
