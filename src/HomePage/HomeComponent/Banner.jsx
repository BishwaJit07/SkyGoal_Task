import React from "react";
import bannerimg from '../../assets/Webtaskresources/Group 171.png'
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-4">       
      <div className="">
        <p className=" text-xl text-black mb-4 font-semibold "> Discover the beauty of the tropics</p>
        <p className=" text-4xl md:text-7xl font-bold">Tropical Destinations</p> <br />
        <p className=" text-7xl ">For Student</p> 
        <p className="text-base my-8">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer <br /> rutrum nisi. A nec nisl vitae
        </p>
        <button className="btn bg-orange-500 text-white text-base rounded-full">Sign Up</button>
       
      </div>

      <div>  <img src={bannerimg} alt="" className=" h-[700px]"/></div>
    </div>
  );
};

export default Banner;
