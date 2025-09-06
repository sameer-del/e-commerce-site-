import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

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
    </div>
  );
};

export default LatestCollection;
