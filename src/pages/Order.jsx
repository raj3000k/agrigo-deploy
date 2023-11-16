import React, { useEffect, useState} from 'react'
import LongCardImage, { LongCardTransit } from '../components/LongCard';
import Navbar from '../components/Navbar';
import TransportDrawer from '../components/TransportDrawer';

const Order =()=> {
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
        {/* <LongCardImage field1={'Name'} value1={"Lekhram"}/> */}
        <div className='flex flex-col space-y-4 h-full flex-wrap mx-4'>
            <div className='w-auto rounded-xl font-bold flex flex-col space-y-2 justify-center items-center' >
               <button className='w-full'>
               <LongCardTransit field1={'Vehical Name'} value1={''} field2={'Vehical Number'} value2={''} field3={'Driver Name'} value3={''} field4={'Earning'} value4={''} field5={'Load Details'} value5={''} field6={'Route'} value6={''}/>
               </button>
               
            </div> 
        </div>
        <div className='flex flex-col space-y-4 h-full flex-wrap mx-4'>
            <div className='w-auto rounded-xl font-bold flex flex-col space-y-2 justify-center items-center' >
               <button className='w-full'>
               <LongCardTransit field1={'Vehical Name'} value1={''} field2={'Vehical Number'} value2={''} field3={'Driver Name'} value3={''} field4={'Earning'} value4={''} field5={'Load Details'} value5={''} field6={'Route'} value6={''}/>
               </button>
               
            </div>
        </div>
        <div className='flex flex-col space-y-4 h-full flex-wrap mx-4'>
            <div className='w-auto rounded-xl font-bold flex flex-col space-y-2 justify-center items-center' >
               <button className='w-full'>
               <LongCardTransit field1={'Vehical Name'} value1={''} field2={'Vehical Number'} value2={''} field3={'Driver Name'} value3={''} field4={'Earning'} value4={''} field5={'Load Details'} value5={''} field6={'Route'} value6={''}/>
               </button>
               
            </div>
        </div>
 </div>
  ) 
}



export default Order ;