import { Fragment, useState } from "react";
import logo from '../assets/images/logo-agri.png'
import fruits from '../assets/images/fruits.jpg'
import { Link } from "react-router-dom";
export default function Cards({ s }) {
  return (
    <div className="items-center flex flex-row">
      <button
        class=" hover:bg-green-500 rounded-3xl text-2xl bg-green-800 items-center h-48 p-2 w-48 text-white flex flex-row 
      justify-center "
      > 
        {s}
      </button>
    </div>
  );
}

export const ImageCard=({image,category,onClick})=>{
  return(
    <div className="flex flex-col justify-center items-center">
      <Link to={onClick}>
      <button>
      <img src={image} className={`h-32 w-auto hover:opacity-70 hover:`}/>
      </button>
      </Link>
      <h1 className="justify-center items-center font-bold">{category}</h1>
     
    </div>
  )
}
export const ItemCard=({image,category,onClick})=>{
  return(
    <div className="flex flex-col items-center justify-center bg-[#00bf63] p-2 hover:bg-[#338b61]">
      <Link to={onClick}>
      <button>
      <img src={image} className={`h-32 w-auto hover:opacity-70 hover:`}/>
      </button>
      </Link>
      <h1 className="justify-center items-center font-bold">{category}</h1>
      <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold hover:bg-[#36499e]'>Show Warehouses</button>
      
     
    </div>
  )
}
export const CardWarehouse=({image,category,onClick})=>{
  return(
    <div className="flex flex-col items-center justify-center bg-[#00bf63] p-2 hover:bg-[#338b61]">
      <Link to={onClick}>
      <button>
      <img src={image} className={`h-32 w-auto hover:opacity-70 hover:`}/>
      </button>
      </Link>
      <h1 className="justify-center items-center font-bold">{category}</h1>
      <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold hover:bg-[#36499e]'>Show Warehouses</button>
      
     
    </div>
  )
}
