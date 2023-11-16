import React from "react";
import logi from "../assets/images/logo-agri.png";
import "../tailwind.css";
import Cards from "../components/Cards";
import FooterWithSitemap from "../components/Footer";
import FooterWithLogo from "../components/Footer2";


const Welcome = () => {
  return (
    <div className="bg-[#d8e6ed] h-full w-auto flex flex-col">
      <div className="bg-[#045930] w-full h-auto py-2 px-2  flex flex-row items-end justify-between">
        <h1 className="text-white font-bold ml-4 text-2xl justify-items-start">
          AgriGo
        </h1>
        <div className="flex flex-row mr-4 justify-between text-white font-bold space-x-4 text-xl ">
          <a className="mr-2" href="/login">
            Login
          </a>
          <a className="mr-2" href="/">
            Sign Up
          </a>
          <a href="/">About Us</a>
        </div>
      </div>
      <div className="bg-[#d8e6ed] flex flex-row mx-6 h-auto mt-12 mb-12">
        <div className="flex flex-col w-auto h-full">
          <div className="">
            <img className="h-64 w-64" src={logi} alt="t" />
          </div>
          <div className="font-bold text-6xl  text-green-800">
            A one Stop solution to all post farming problems
          </div>

          <p className="my-4">
            Welcome to the Future of Agri-food Transportation! At AgriGo, we're
            driving a revolution in supply chain logistics. Our Advanced
            Transportation Management System (ATMS) is the key to unlocking
            efficiency, reducing costs, and ensuring the freshest produce
            reaches your customers.
          </p>

          <div className="h-36 w-full bg-[#d8e6ed]"></div>

          <div id="Cards" className=" flex flex-row justify-between ">
            <Cards s={"Get Best Price & Quality at one place"} />
            <Cards s={"Safe & Secure Delivery Service"} />
            <Cards s={"All type of Agri Products"} />
            <Cards s={"Book your order in one tap"} />
          </div>
        </div>

        <div className="flex flex-col h-full w-auto flex-wrap  items-center  ">
          <div className="flex flex-row ">
            <div className="h-40 w-40 rounded-full bg-green-500 items-center justify-center flex mr-2">
              <h1 className="font-bold text-white text-xl">WAREHOUSE</h1>
            </div>
            <div className="h-40 w-40 rounded-full bg-green-500 items-center justify-center flex">
              <h1 className="font-bold text-white text-xl">DISTRIBUTOR</h1>
            </div>
          </div>
          <div className="h-40 w-40 rounded-full bg-green-500 items-center justify-center flex">
            <h1 className="font-bold text-white text-xl">TRANSPORTER</h1>
          </div>
        </div>
      </div>
      <FooterWithSitemap />
      <FooterWithLogo/>
    </div>
  );
};

export default Welcome;
