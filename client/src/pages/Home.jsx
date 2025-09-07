import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";

const Home = () => {
  const { currency } = useContext(ShopContext);
  return <div>
    <LatestCollection/>
    <BestSeller/>
  </div>;
};

export default Home;
