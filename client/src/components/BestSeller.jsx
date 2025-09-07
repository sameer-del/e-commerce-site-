import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [BestSeller, SetBestSeller] = useState([]);
  console.log(products);
  useEffect(() => {
    const bestproduct = products.filter((item) => item.bestseller);
    
    SetBestSeller(bestproduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-xl">
        <Title text1={"BEST"} text2={"Seller"} />
        <p className="text-center text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veritatis nam voluptate,
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {BestSeller.map((item, index) => (
          <ProductItem
            key={item._id} // Use a stable, unique ID for the key
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
