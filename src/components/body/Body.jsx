import React from "react";
import {
  AiOutlineAppstoreAdd,
  AiOutlineSearch,
  AiFillStar,
} from "react-icons/ai";
import { BsPlus, BsArrowRightShort } from "react-icons/bs";
import { MdMonetizationOn } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

const Body = () => {
  return (
    <div className="bg-bodyBg m-auto h-[100%] basis-80 p-8">
      {/* top section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center border-b-2 pb-2 basis-1/2 gap-2">
          <AiOutlineSearch className="text-hoverColor text-[20px] cursor-pointer" />
          <input
            type="text"
            placeholder="Search your favourite"
            className="border-none outline-none placeholder:text-sm"
          />
        </div>
        <div className="flex gap-4 items-center">
          <AiOutlineAppstoreAdd className="text-hoverColor cursor-pointer text-[25px] hover:text-[20px] transition-all" />
          <button className="bg-sideMenuBg cursor-pointer text-bodyBg font-semibold py-2 px-4 rounded-[5px] hover:bg-[#55545e] transition-all">
            Go Premium
          </button>
        </div>
      </div>
      {/* title div */}
      <div className="flex items-center justify-between mt-8">
        <div className="title">
          <h1 className="text-[35px] text-titleColor tracking-[1px] font-black">
            Find the best place
          </h1>
          <span className="text-[16px] opacity-70">
            <strong>284 Restaurants,</strong> choose yours
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="specials px-4 text-center border-r-2">
            <h3 className="text-[20px] font-bold text-titleColor">95</h3>
            <small className="text-[16px] opacity-70">Specials</small>
          </div>
          <div className="deliveries px-4 text-center">
            <h3 className="text-[20px] font-bold text-titleColor">80</h3>
            <small className="text-[16px] opacity-70">Deliveries</small>
          </div>
        </div>
      </div>
      {/* categories div */}
      <div className="flex mt-8 items-center gap-10">
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/93/93085.png?w=740&t=st=1687944930~exp=1687945530~hmac=fe647af4d40a5e9f8f85b8030c80585d961fb44aead66f4e14921d9b1f67aa70"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            italian
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/135/135434.png?w=740&t=st=1687945182~exp=1687945782~hmac=b876196e61fcfdc5c3f8e172f246e7f880f9307c09387744f361398c8feb212e"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            asian
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/106/106562.png?w=740&t=st=1687945588~exp=1687946188~hmac=af191e53d5062eac1b3a266015ceccf66b7f53560dded1d1c1be9f208cf3f2c9"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            bar
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://img.freepik.com/free-icon/hamburger_318-122747.jpg?t=st=1687948049~exp=1687948649~hmac=e8fac0e3f68d16fe1182d43bcc586d43c2ddf08e12a1c758967d0d436639401a"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            burgers
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/34/34819.png?w=740&t=st=1687948009~exp=1687948609~hmac=ec53c2d4aaee1077bc825af4158d3e82dbdf38f8e29ac925516184bc265d8413"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            cafe
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/70/70965.png?w=740&t=st=1687946807~exp=1687947407~hmac=ebe647aa5919f42a98addd888842cb57a6fa969b88128c515aac78ee862613a7"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            pubs
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/95/95812.png?w=740&t=st=1687946899~exp=1687947499~hmac=1d114e57fa710da378ec4762fdcb56060e8468855706d97f6c058268b3fc898a"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            vegan
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/119/119026.png?w=740&t=st=1687948126~exp=1687948726~hmac=3d772ee22f2617e0e9ba7176a9b899c6f49b8fd8c9b532515ba48e01dce48d6a"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            sea
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/474/474738.png?w=740&t=st=1687947855~exp=1687948455~hmac=8bc7fdbb3b6128f72c6d1540676602337d26550356f86feeef53ec0aea2ac192"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            sushi
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/114/114873.png?w=740&t=st=1687947654~exp=1687948254~hmac=d843748d043d1bf12d27205b5da189075c792b6fec8308a9feef5d96c7c38478"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            bbq
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1196/1196585.png?w=740&t=st=1687948216~exp=1687948816~hmac=c2773c551a3513ed43e89436aea0cef0d4115a785b504848e32b31e28bdcf3cc"
              alt="food image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            hotdog
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f6eff4] rounded-full flex items-center justify-center m-auto p-1">
            <BsPlus className="text-center flex justify-center m-auto text-[25px] hover:scale-[1.5] transition-all cursor-pointer" />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center">
            more
          </span>
        </div>
      </div>
      {/* restaurants section */}
      <div className="restaurant mt-8">
        <div className="flex items-center justify-between">
          <div className="title">
            <h1 className="text-[16px] text-titleColor font-bold">
              New Restaurants
            </h1>
            <span className="text-[16px] opacity-70">
              <strong>9 restaurants, </strong> have been opened up in town
            </span>
          </div>
          <button className="flex gap-1 cursor-pointer text-titleColor font-semibold py-2 px-4 rounded-[5px] hover:bg-[#55545e] hover:text-bodyBg transition-all">
            View All <BsArrowRightShort className="text-[20px]" />
          </button>
        </div>
        <div className="restaurantContainer py-8 flex justify-between items-center">
          <div className="singleRestaurant w-[220px] bg-colorOne p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-ful overflow-hidden rounded-md">
              <img
                src="https://images.pexels.com/photos/960856/pexels-photo-960856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="restaurant image"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restName block text-center font-bold opacity-90 pt-4">
              Molef Ulif
            </h1>
            <small className="block text-center text-[#606060] font-medium">
              Asian Restaurant
            </small>
            <div className="info mt-5 flex justify-center items-center">
              <div className="singleInfo grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">3.7</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <MdMonetizationOn className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">30</h4>
              </div>
              <div className="singleInfo grid px-3">
                <GiPathDistance className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">.7</h4>
              </div>
            </div>
          </div>
          <div className="singleRestaurant w-[220px] bg-colorTwo p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-ful overflow-hidden rounded-md">
              <img
                src="https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="restaurant image"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restName block text-center font-bold opacity-90 pt-4">
              La Foam
            </h1>
            <small className="block text-center text-[#606060] font-medium">
              Sea Food
            </small>
            <div className="info mt-5 flex justify-center items-center">
              <div className="singleInfo grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">4.7</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <MdMonetizationOn className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">30</h4>
              </div>
              <div className="singleInfo grid px-3">
                <GiPathDistance className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">2.7</h4>
              </div>
            </div>
          </div>
          <div className="singleRestaurant w-[220px] bg-colorThree p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-ful overflow-hidden rounded-md">
              <img
                src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="restaurant image"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restName block text-center font-bold opacity-90 pt-4">
              Pizzaro
            </h1>
            <small className="block text-center text-[#606060] font-medium">
              Fast Food
            </small>
            <div className="info mt-5 flex justify-center items-center">
              <div className="singleInfo grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">4.0</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <MdMonetizationOn className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">70</h4>
              </div>
              <div className="singleInfo grid px-3">
                <GiPathDistance className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">1.4</h4>
              </div>
            </div>
          </div>
          <div className="singleRestaurant w-[220px] bg-colorFour p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-ful overflow-hidden rounded-md">
              <img
                src="https://images.pexels.com/photos/17182373/pexels-photo-17182373/free-photo-of-photo-of-a-glass-with-a-cocktail-and-a-bottle-of-gin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="restaurant image"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restName block text-center font-bold opacity-90 pt-4">
              Pareco
            </h1>
            <small className="block text-center text-[#606060] font-medium">
              Cocktail
            </small>
            <div className="info mt-5 flex justify-center items-center">
              <div className="singleInfo grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">5.0</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <MdMonetizationOn className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">40</h4>
              </div>
              <div className="singleInfo grid px-3">
                <GiPathDistance className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold text-[#4f4d58]">5.1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
