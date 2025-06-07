import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-12 pt-2 pb-2 pl-3 pr-3 bg-gradient-to-r from-stone-100 to-stone-200 border-b-2 border-slate-700 duration-300 flex justify-center items-center gap-5">
      <div className="w-[30%] ">
        <h1 className="text-xl font-bold font-serif text-blue-600">
          TeachMint
        </h1>
      </div>

      <div className="w-[60%] flex justify-evenly items-center gap-6 ">
        <Link
          to={"/"}
          className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300"
        >
          Home
        </Link>
        <Link
          to={"/About"}
          className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300"
        >
          About
        </Link>
        <Link
          to={"/Login"}
          className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300"
        >
          Login
        </Link>
        <Link
          to={"/Contact"}
          className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300"
        >
          Contact
        </Link>
        <Link
          to={"/Signup"}
          className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300"
        >
          Signup
        </Link>
      </div>
      <div className="w-[10%] flex justify-center items-center">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
