import { createContext } from "react";
import { products } from "../../public/assets/frontend_assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const devlivery_fee = 10;
  const value = {
    currency,
    devlivery_fee,
    products
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
