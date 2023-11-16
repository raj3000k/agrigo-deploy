import React from "react";
import Navbar from "../components/Navbar";
import fruits from '../assets/images/fruits.jpg'
import vegetables from '../assets/images/vegetables.jpg'
import rice from '../assets/images/rice.jpg'
import pulses from '../assets/images/dal.jpg'
import grains from '../assets/images/grains.jpg'
import spices from '../assets/images/spices.jpg'
import { ImageCard, ItemCard } from "../components/Cards";
import { Link } from "react-router-dom";
import Apple from '../assets/images/Apple.jpg'
import banana from '../assets/images/Banana.jpg'
import Blackrice from '../assets/images/Black rice.jpg'
import Brinjal from '../assets/images/Bringal.jpg'
import Capsicum from '../assets/images/Capsicum.jpg'
import Carrot from '../assets/images/Carrot.jpg'
import kiwi from '../assets/images/kiwi.jpg'
import whiteRice from '../assets/images/White Rice.jpg'
import FooterWithSitemap from "../components/Footer";
const ItemList=()=>{
    const pathName = window.location.pathname
    const item=pathName.split('/')[3]
    const ItemData=[
        {
            image:Apple,
            item: 'Apple',
            url: "/distributor/category/warehouse/Apple"
        },
        {
            image:banana,
            item: 'Banana',
            url: "/distributor/category/warehouse/Banana"
        },  {
            image:Blackrice,
            item: 'Black Rice',
            url: "/distributor/category/warehouse/Black-Rice"
        },  {
            image:Brinjal,
            item: 'Brinjal',
            url: "/distributor/category/warehouse/Brinjal"
        },  {
            image:Capsicum,
            item: 'Capsicum',
            url: "/distributor/category/warehouse/Capsicum"
        },  {
            image:Carrot,
            item: 'Carrot',
            url: "/distributor/category/warehouse/Carrot"
        },  {
            image:kiwi,
            item: 'Kiwi',
            url: "/distributor/category/warehouse/Kiwi"
        },
        
        
      ]
    return(
        <div>
            <Navbar/>

<div className="flex flex-col justify-center items-center">
<h1 className="text-bold self-center text-black text-2xl">Items By Category- {item}</h1>
<div className="flex flex-row justify-evenly m-4 flex-wrap space-y-2">
{ItemData.map((data)=>{
  return <div>
    <ItemCard image={data.image} category={data.item} onClick={data.url}/>
  </div>
})}

</div>
<Link to="/distributor/category/warehouse/all">
<button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold hover:bg-[#36499e] mt-4 self-center justify-center items-center'>Show All Warehouses</button>
</Link>
<FooterWithSitemap/>
</div>
        </div>
        
    )
   
}

export default ItemList