import React from 'react'
import logo from '../assets/images/logo-agri.png'
import { Link } from 'react-router-dom'


export const LongCardImage=({field1,field2,field3,field4,field5,field6,value1,value2,value3,value4,value5,value6,image})=> {
    
  return (
    <div className='bg-[#00bf63] h-auto rounded-xl p-4 m-4 w-full'>
        <div className='flex flex-row justify-between items-center'>
        <img src={image} className='h-32 w-32'/>
                <div className='flex flex-col'>
                <h1 className='text-white font-bold text-lg'>{field1}: {value1}</h1>
                <h1 className='text-white font-bold text-lg'>{field2}: {value2}</h1>
                <h1 className='text-white font-bold text-lg'>{field3}: {value3}</h1>

            </div>
            <div className='flex flex-row justify-between'>
            
            <div className='flex flex-col'>
                <h1 className='text-white font-bold text-lg'>{field4}: {value4}</h1>
                <h1 className='text-white font-bold text-lg'>{field5}: {value5}</h1>
                <h1 className='text-white font-bold text-lg'>{field6}: {value6}</h1>

            </div>
            </div>
            <div className='flex flex-row justify-between'>
            
            <div className='flex flex-col space-y-2'>
            <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold'>Verify Driver</button>
            <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold'>Edit Driver</button>

            <button className='bg-red-400 p-2 rounded-2xl text-white font-bold'>Delete Driver</button>
            </div>
            </div>  

        </div>
    </div>
  )
}
export const LongCardVehicle=({field1,field2,field3,field4,field5,field6,value1,value2,value3,value4,value5,value6})=> {
    
    return (
      <div className='bg-[#00bf63] h-auto rounded-xl p-4 m-4 w-full'>
          <div className='flex flex-row justify-between items-center'>
          <img src={logo} className='h-32 w-32'/>
                  <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-lg'>{field1}: {value1}</h1>
                  <h1 className='text-white font-bold text-lg'>{field2}: {value2}</h1>
                  <h1 className='text-white font-bold text-lg'>{field3}: {value3}</h1>
  
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-lg'>{field4}: {value4}</h1>
                  <h1 className='text-white font-bold text-lg'>{field5}: {value5}</h1>
                  <h1 className='text-white font-bold text-lg'>{field6}: {value6}</h1>
  
              </div>
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col space-y-2'>
              <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold'>Edit Vehicle</button>
              <Link to='/track'>
              <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold'>Track Vehicle</button>

              </Link>
  
              <button className='bg-red-400 p-2 rounded-2xl text-white font-bold'>Delete Vehicle</button>
              </div>
              </div>  
  
          </div>
      </div>
    )
  }
export const LongCardTransit=({field1,field2,field3,field4,field5,field6,value1,value2,value3,value4,value5,value6})=> {
    
    return (
      <div className='bg-[#00bf63] h-auto rounded-xl p-4 m-4 '>
          <div className='flex flex-row justify-between items-center'>
          <img src={logo} className='h-32 w-32'/>
                  <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-lg'>{field1}: {value1}</h1>
                  <h1 className='text-white font-bold text-lg'>{field2}: {value2}</h1>
                  <h1 className='text-white font-bold text-lg'>{field3}: {value3}</h1>
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-lg'>{field4}: {value4}</h1>
                  <h1 className='text-white font-bold text-lg'>{field5}: {value5}</h1>
                  <h1 className='text-white font-bold text-lg'>{field6}: {value6}</h1>
              </div>
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col space-y-2'>
              <Link to='/track'>
              <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold hover:bg-blue-800'>Track Status</button>
              </Link>
              <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold hover:bg-blue-800'>Complete Detail</button>
              </div>
              </div>  
  
          </div>
      </div>
    )
  }
  
  export const ShowTransportCard=({image,name,vehicle,number,quantity,rate,Insurance, expectedDelivery, location,orderUrl})=> {
    
    return (
      <div className='bg-white h-auto rounded-xl border-2 border-[#00bf63] p-2 m-4 w-[50%] flex flex-col justify-between-'>
        <h1 className='flex self-centre text-lg font-bold my-2'>Name:{name}</h1>
        <h1 className='text-black font-bold text-lg'>Vehicle: {vehicle}</h1>
          <div className='flex flex-row justify-between items-center'>
          <img src={image} className='h-32 w-32'/>
                  <div className='flex flex-col'>
                  <h1 className='text-black font-bold text-lg'>Number: {number}</h1>
                  <h1 className='text-black font-bold text-lg'>Max Quantity: {quantity}</h1>
                  <h1 className='text-black font-bold text-lg'>Rate / KM: {rate}</h1>
  
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col'>
                  <h1 className='text-black font-bold text-lg'>Insurance: {Insurance}</h1>
                  <h1 className='text-black font-bold text-lg'>ETA: {expectedDelivery}</h1>
  
              </div>
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col space-y-2'>
                <Link to={orderUrl}>
                <button className='bg-[#43ee43] p-2 rounded-2xl text-white font-bold w-full'>Choose Transport</button>
                </Link>
              
              <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold'>Contact Transporter</button>
  
              {/* <button className='bg-red-400 p-2 rounded-2xl text-white font-bold'>Delete Vehicle</button> */}
              </div>
              </div>  
  
          </div>
      </div>
    )
  }

  export const LongCardWarehouse=({name,item,quantity,grade,rating, price, location,orderUrl})=> {
    
    return (
      <div className='bg-white h-auto rounded-xl border-2 border-[#00bf63] p-2 m-4 w-[50%] flex flex-col justify-between-'>
        <h1 className='flex self-centre text-lg font-bold my-2'>Name:{name}</h1>
        <h1 className='text-black font-bold text-lg'>Location: {location}</h1>
          <div className='flex flex-row justify-between items-center'>
          <img src={logo} className='h-32 w-32'/>
                  <div className='flex flex-col'>
                  <h1 className='text-black font-bold text-lg'>Item: {item}</h1>
                  <h1 className='text-black font-bold text-lg'>Quantity: {quantity}</h1>
                  <h1 className='text-black font-bold text-lg'>Grade: {grade}</h1>
  
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col'>
                  <h1 className='text-black font-bold text-lg'>Rating: {rating}</h1>
                  <h1 className='text-black font-bold text-lg'>Price/ Kg: {price}</h1>
  
              </div>
              </div>
              <div className='flex flex-row justify-between'>
              
              <div className='flex flex-col space-y-2'>
                <Link to={orderUrl}>
                <button className='bg-[#43ee43] p-2 rounded-2xl text-white font-bold w-full'>Order</button>
                </Link>
              
              <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold'>Show Previous Orders</button>
  
              {/* <button className='bg-red-400 p-2 rounded-2xl text-white font-bold'>Delete Vehicle</button> */}
              </div>
              </div>  
  
          </div>
      </div>
    )
  }