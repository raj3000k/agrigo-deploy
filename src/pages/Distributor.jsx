import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { AiOutlineMenu } from "react-icons/ai";
import TransportDrawer from "../components/TransportDrawer";
import LongCardImage, { LongCardTransit } from "../components/LongCard";
import Navbar from "../components/Navbar";
import { ImageCard } from "../components/Cards";
import fruits from '../assets/images/fruits.jpg'
import vegetables from '../assets/images/vegetables.jpg'
import rice from '../assets/images/rice.jpg'
import pulses from '../assets/images/dal.jpg'
import grains from '../assets/images/grains.jpg'
import spices from '../assets/images/spices.jpg'
import image from '../assets/images/AgriGo.png'
import { Link, useNavigate } from "react-router-dom";

const Distributor = () => {
  const [drawer, setDrawer] = useState(false);
  const catData=[
    {
      Image:fruits,
      category:'Fruits',
      url: '/distributor/category/Fruits'
    },
    {
      Image:vegetables,
      category:'Vegetables',
      url: '/distributor/category/Vegetables'
    },
    {
    Image:rice,
      category:'Rice',
      url: '/distributor/category/Rice'
    },
    {
      Image:pulses,
      category:'Pulses',
      url: '/distributor/category/Pulses'
    },
    {
      Image:grains,
      category:'Whole Grain',
      url: '/distributor/category/Grains'
    },
    {
      Image:spices,
      category:'Spices',
      url: '/distributor/category/Spices'
    },
    
  ]
  const navigate=useNavigate();
  return (
    <div className="bg-white h-full flex flex-col">
      <Navbar />
      <div id="search" className="mx-4">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only  dark:text-white mx-"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full  my-6 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Fruits, Vegetables.."
              required
            ></input>
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    <h1 className="font-bold ml-4 text-lg">Search By Category</h1>
      <div className="flex flex-row justify-evenly m-4 flex-wrap">
        {catData.map((data)=>{
          return <div>
            <ImageCard image={data.Image} category={data.category} onClick={data.url}/>
          </div>
        })}
      {/* <ImageCard image={fruits} category={'Fruits'}/>
      <ImageCard image={fruits} category={'Fruits'}/> */}
      </div>
      <Link to='/distributor/category/all'>
      <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold w-[30%] self-centre'>View All Items</button>

      </Link>
      <div className="flex flex-row mt-6 p-8 justify-evenly h-full flex-wrap">
        <div className="flex flex-col space-y-4 h-full w-[40%]">
          <div className="bg-[#eb625b] w-full h-auto p-4 rounded-xl font-bold items-center flex justify-center">
            <h1 className="font-bold justify-items-center text-white">
              My Orders
            </h1>
          </div>
          <div className="bg-[#00bf63] h-auto p-4 rounded-xl font-bold flex justify-center space-x-2 ">
            <button>
              <div className="bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center hover:bg-[#74dfab]">
                <h1>Order 1</h1>
                <h1>Id: 09092</h1>
              </div>
            </button>
            <button>
              <div className="bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center hover:bg-[#74dfab]">
                <h1>Order 2</h1>
                <h1>Id: 09093</h1>
              </div>
            </button>
            <button>
              <div className="bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center  hover:bg-[#74dfab]">
                <h1>Order 3</h1>
                <h1>Id: 09094</h1>
              </div>
            </button>
          </div>
          <button className="bg-[#5271ff] h-auto w-auto rounded-xl text-white font-bold p-2 hover:bg-blue-800">
            View All Orders
          </button>
        </div>
      </div>

      {/* <LongCardImage field1={'Name'} value1={"Lekhram"}/> */}
      <div className="flex flex-col space-y-4 h-full flex-wrap mx-4">
        <div className="w-auto rounded-xl font-bold flex flex-col space-y-2 justify-center items-center">
          <button className="w-full">
            <LongCardTransit
              field1={"Warehouse"}
              value1={"Rashmi Storage, Jammu"}
              field2={"Vehicle"}
              value2={"CG 04 ZD 1643"}
              field3={"Item"}
              value3={"Apple"}
              field4={"Route"}
              value4={"Jammu-Delhi"}
              field5={"Invoice No"}
              value5={12}
              field6={"Legal Status"}
              value6={"Insured"}
            />
          </button>
        </div>
        <button className="bg-[#5271ff] h-auto w-[30%] self-center rounded-xl text-white font-bold p-2 hover:bg-blue-800 mb-4">
          Show Transit Details
        </button>
      </div>
    </div>
  );
};

export default Distributor;
