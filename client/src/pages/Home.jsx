import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import LatestCollection from "../components/LatestCollection";

const Home = () => {
  const { currency } = useContext(ShopContext);
  return <div>
    <LatestCollection/>
  </div>;
};

export default Home;
