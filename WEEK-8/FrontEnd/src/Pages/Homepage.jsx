import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img1 from "../assets/img1.jpg";

const Homepage = () => {
  return (
    <div className="bg-yellow-100 w-full h-full">
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
        <img className="w-[88%] h-auto rounded-lg" src={img1} alt="" />
      </div>

      <div className="flex justify-center items-center mb-24 ">
        <span className="font-serif text-lg text-center font-bold">
          Empowering the Education around the World from Past Two Decades.
        </span>
      </div>

      <div className="w-full flex justify-center items-center gap-10 mt-16 mb-16 p-4">
        <div className="text-center w-[65%] flex  justify-center items-center ">
          <h1 className="w-full text-6xl font-serif">
            Meeting The Talent With The Mentors
          </h1>
        </div>
        <div className=" w-[35%]  text-center flex justify-center items-center ">
          <p className="text-md font-serif">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sequi
            magnam sapiente cumque corrupti exercitationem quas! Voluptatem
            totam dignissimos veniam quia suscipit, consequatur exercitationem
            voluptatum necessitatibus porro nostrum, atque distinctio sed
            laudantium laboriosam accusantium. Tempora iste illum quasi illo ab.
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-100 flex justify-between items-center gap-10 mt-16 mb-16 p-4">
        <div className="text-center w-[35] flex  justify-center items-center ">
          <img
            className="h-[500px] border-2 border-yellow-900 rounded-lg"
            src="https://images.pexels.com/photos/11623705/pexels-photo-11623705.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className=" w-[65%]  text-center  flex justify-center items-center ">
          <img
            className="rounded-xl border-2 border-yellow-900"
            src="https://images.pexels.com/photos/4626456/pexels-photo-4626456.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-auto  pt-12 mt-12 mb-12 flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl text-center font-serif font-bold mb-24 mt-8">
          At TeachMint We Form The Future Of Human Race By Providing Education.
        </h1>
        <img
          className="w-[80%] rounded-lg border-2 border-yellow-900"
          src="https://images.pexels.com/photos/4549411/pexels-photo-4549411.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="w-[50%] p-4 bg-white rounded-xl flex justify-center items-center hover:scale-110 hover:bg-blue-200 hover:text-yellow-900 duration-300">
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Magni debitis
          veniam nostrum rerum a ducimus. Aspernatur ipsum fugiat,
          exercitationem commodi est alias!
           Suscipit temporibus dolorem unde,
          cum assumenda iusto expedita.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
