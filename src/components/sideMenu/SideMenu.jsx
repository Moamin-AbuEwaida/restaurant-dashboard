import React from "react";
import { GiHamburger } from "react-icons/gi";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { BsBookmarkCheckFill } from "react-icons/bs";

const SideMenu = () => {
  return (
    <div className="bg-sideMenuBg relative h-[100%] basis-20 p-4">
      {/* logo div */}
      <div className="logo mt-4 gap-2 text-[white] flex items-center justify-center m-auto">
        <GiHamburger className="text-[20px]" />
        <h1 className="text-[20px] align-center justify-center font-black">
          Foodie
        </h1>
      </div>
      {/* user div */}
      <div className="flex items-center justify-center text-[white] flex-col mt-[3rem] admin">
        <img
          src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="admin Image"
          className="h-[80px] w-[80px] border-red-200 border-[4px] object-cover rounded-full"
        />
        <span className="opacity-70 mt-2 text-gray-400">Welcome,</span>
        <h3 className="font-bold text-textColor">Carlos Cenna</h3>
      </div>
      {/* simple menu */}
      <div className="m-auto grid justify-center mt-4">
        <li className="flex py-3 pl-3 gap-2 hover:opacity-100 items-center">
          <AiFillHome className="text-white" />
          <span className="text-textColor">Home</span>
        </li>
        <li className="flex py-3 pl-3 gap-2 hover:opacity-100 items-center">
          <BiRestaurant className="text-white" />
          <span className="text-textColor">Categories</span>
        </li>
        <li className="flex py-3 pl-3 gap-2 hover:opacity-100 items-center">
          <BsBookmarkCheckFill className="text-white" />
          <span className="text-textColor">Reservations</span>
        </li>
        <li className="flex py-3 pl-3 gap-2 hover:opacity-100 items-center">
          <AiFillHeart className="text-white" />
          <span className="text-textColor">Favourites</span>
        </li>
      </div>
      {/* sidemenu map div */}
      <div className="mt-5 h-[14rem] w-full rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
          alt="Map Image"
          className="object-cover h-[100%]"
        />
      </div>
    </div>
  );
};

export default SideMenu;
