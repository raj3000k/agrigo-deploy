import React, { useEffect, useState} from 'react'
import { supabase } from '../supabase/supabase'
import { AiOutlineMenu } from "react-icons/ai";
import TransportDrawer from '../components/TransportDrawer';
import LongCardImage, { LongCardTransit } from '../components/LongCard';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Transporter=()=> {
    const[drawer,setDrawer]=useState(false)
 
    
  return (
    <div className='bg-white h-full flex flex-col'>
        {/* <div className='bg-[#045930] w-full h-auto py-2 flex flex-row justify-between px-4' >
            <div className='flex flex-row'>

               <button>
               <AiOutlineMenu color='black' size={36} onClick={()=>setDrawer(!drawer)}/>
                </button> 
           
        <h1 className='text-black font-bold text-2xl justify-items-start ml-4'>User</h1>
            </div>
        <h1 className='text-black font-bold ml-4 text-2xl mr-2'>Transporter</h1>
      </div> */}
      <Navbar/>
      {drawer?
       <>
       <TransportDrawer/>
       </>
       :<></>}
       <div className='flex flex-row mt-6 p-8 justify-evenly h-full flex-wrap'>
        <div className='flex flex-col space-y-4 h-full w-[40%]'>
            <div className='bg-[#00bf63] w-auto h-auto p-4 rounded-xl font-bold items-center flex justify-center'>
                <h1 className='font-bold justify-items-center text-white'>Orders</h1>
            </div>
            <div className='bg-[#00bf63] h-auto p-4 rounded-xl font-bold flex justify-center space-x-2 '>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center hover:bg-[#74dfab]'>
                    <h1>Rice- 5Ton</h1>
                    <h1>Location</h1>
                </div>
               </button>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center  hover:bg-[#74dfab]'>
               <h1>Rice- 5Ton</h1>
                    <h1>Location</h1>
                </div>
               </button>
               
            </div>
            <Link to="/transporter/order">
            <button className='bg-[#5271ff] h-auto w-full rounded-xl text-white font-bold p-2 hover:bg-blue-800'>View All Orders</button>
            </Link>
            
            
        </div>
        <div className='flex flex-col space-y-4 h-full flex-wrap w-[40%]'>
            <div className='bg-[#00bf63] w-auto h-auto p-4 rounded-xl font-bold items-center flex justify-center'>
                <h1 className='font-bold justify-items-center text-white items-centre flex'>Available Vehicles</h1>
            </div>
            <div className='bg-[#00bf63] w-auto h-auto p-4 rounded-xl font-bold flex flex-col space-y-2'>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center  hover:bg-[#74dfab]'>
                    <h1>Tata Ace: CG 04 HX 1234</h1>
                    
                </div>
               </button>
               <button>
               <div className='bg-[#d8e6ed] w-auto h-auto p-4 rounded-xl font-bold flex flex-col justify-center items-center  hover:bg-[#74dfab]'>
               <h1>Tata Ace: CG 04 HX 1234</h1>
                    
                </div>
               </button>
            </div>
            <Link to="/transporter/vehicles" className='w-full'>
            <button className='bg-[#5271ff] w-full h-auto rounded-xl text-white font-bold p-2 hover:bg-blue-800' onClick={()=>{}}>Manage Vehicles</button>
            </Link>
           
        </div>
        
       </div>
       
        {/* <LongCardImage field1={'Name'} value1={"Lekhram"}/> */}
        <div className='flex flex-col space-y-4 h-full flex-wrap mx-4'>
            <div className='bg-[#00bf63] w-auto h-auto p-2 rounded-xl font-bold justify-center flex items-centre'>
                <h1 className='font-bold justify-items-center text-white items-centre flex text-lg'>In Transit</h1>
            </div>
            <div className='w-auto rounded-xl font-bold flex flex-col space-y-2 justify-center items-center' >
               <button className='w-full'>
               <LongCardTransit field1={'Driver Name'} value1={'Ramesh'} field2={'Vehicle'} value2={'CG 04 ZD 1643'} field3={'Item'} value3={'Rice'} field4={'Route'} value4={'Raipur-Delhi'} field5={'Invoice No'} value5={12} field6={'Legal Status'} value6={'Insured'}/>
               </button>
               
            </div>
            <button className='bg-[#5271ff] h-auto w-[30%] self-center rounded-xl text-white font-bold p-2 hover:bg-blue-800 mb-4'>Show Transit Details</button>
        </div>
 </div>
  ) 
}

export default Transporter;
