import React from "react";
import { Link } from "react-router-dom";
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className="w-full h-12 p-2  bg-gradient-to-r from-stone-100 to-stone-200 border-b-2 border-slate-700 duration-300 flex justify-around items-center gap-5">
      <div className="w-[30%] ">
        <h1 className="text-xl font-bold font-serif bg-gradient-to-r from-sky-600 to-indigo-500 bg-clip-text text-transparent">TeachMint</h1>
      </div>

      <div className="w-[60%] flex justify-evenly items-center gap-6 ">
        <Link className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300" to={"/"}>
          Home
        </Link>
        <Link className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300" to={"/"}>
          About
        </Link>
        <Link className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300" to={"/"}>
          Login
        </Link>
        <Link className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300" to={"/"}>
          Contact
        </Link>
        <Link className="text-sm font-semibold bg-gradient-to-r from-slate-900 to-stone-500 bg-clip-text text-transparent hover:text-blue-600 duration-300" to={"/"}>
          Signup
        </Link>
      </div>
       
    <Menu/>
  
    </nav>
  );
};

export default Navbar;
