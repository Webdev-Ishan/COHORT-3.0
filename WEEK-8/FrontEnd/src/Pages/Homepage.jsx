import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img1 from '../assets/img1.jpg'

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-stone-100 to-stone-200 w-full h-full">
      <Navbar />
      <div className="w-full h-auto pt-12 mt-12 mb-4 flex justify-center items-center">
        <div className="w-full flex flex-col  items-center text-center justify-center gap-4">
          <span className="text-6xl font-serif font-bold ">
            BUILDING THE FUTURE
          </span>
          <span className="text-6xl font-serif font-bold "> OF </span>
          <span className="text-6xl font-serif font-bold ">
            EVERY CHILD DAY BY DAY
          </span>

          <p className="text-center font-serif font-thin mt-12 mb-8">
            Fast-track goals with advanced insights plus a dedicated customer
            success team to help drive effective learning.
          </p>

          <button className="w-auto h-auto p-2 font-bold bg-yellow-400 text-black hover:bg-blue-600 duration-300 rounded-lg border  border-black">
            BOOK A SESSION{" "}
          </button>
        </div>
      </div>

      <div className="w-full h-auto pt-12 pb-12 mt-12 mb-12 flex justify-center items-center">
        <img
          className="w-[88%] h-auto rounded-lg"
          src={img1}
          alt=""
        />

        
      </div>

      <div className="flex justify-center items-center mb-24 ">

        <span className="font-serif text-lg text-center font-bold">Empowering the Education around the World from Past Two Decades.</span>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
