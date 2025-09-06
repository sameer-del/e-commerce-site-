import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="h-[50px] px-4 bg-black text-white flex justify-around items-center">
      <div>logo</div>
      <div>
        <ul className="lg:block md:block hidden">
          <NavLink to="/" className="px-2">
            home
          </NavLink>
          <NavLink to="/order" className="px-2">
            order
          </NavLink>
          <NavLink to="/about" className="px-2">
            about
          </NavLink>
          <NavLink to="/collection" className="px-2">
            collection
          </NavLink>
          <NavLink to="/product" className="px-2">
            product
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-5">
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src="/assets/frontend_assets/profile_icon.png"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-36 py-3 px-5 bg-slate-100 text-blue-500">
              <p className="cursor-pointer hover:text-black">my profile</p>
              <p className="cursor-pointer hover:text-black">order</p>
              <p className="cursor-pointer hover:text-black">logout</p>
            </div>
          </div>
        </div>
        <div>
          <Link to="/cart" className="relative">
            <img
              className="w-5"
              src="/assets/frontend_assets/cart_icon.png"
              alt=""
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white aspect-square rounded-full text-[8px] text-black  ">
              0{" "}
            </p>
          </Link>
        </div>
        <div>
          <img
            onClick={() => setVisible(!visible)}
            src="/assets/frontend_assets/menu_icon.png"
            className="w-5 flex justify-center items-center lg:hidden "
            alt=""
          />
        </div>
      </div>
      <div
        className={`absolute right-0 bottom-0 top-0 overflow-hidden  transition-all  h-full text-white bg-red-500  ${
          visible ? "w-full " : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-500">
          <div
            onClick={() => setVisible(!visible)}
            className="flex items-center gap-4 "
          >
            <img
              className="h-4 px-1 rotate-180"
              src="/assets/frontend_assets/dropdown_icon.png"
              alt=""
            />
            <p>back</p>
            
          </div>
          <NavLink  onClick={() => setVisible(!visible)} to="/" className="py-2 pl-6 border">
              home
            </NavLink>
            <NavLink  onClick={() => setVisible(!visible)} to="/order" className="py-2 pl-6 border">
              order
            </NavLink>
            <NavLink  onClick={() => setVisible(!visible)} to="/about" className="py-2 pl-6 border">
              about
            </NavLink>
            <NavLink  onClick={() => setVisible(!visible)} to="/collection" className="py-2 pl-6 border">
              collection
            </NavLink>
            <NavLink  onClick={() => setVisible(!visible)} to="/product" className="py-2 pl-6 border">
              product
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
