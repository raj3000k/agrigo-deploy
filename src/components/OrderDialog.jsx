import React from 'react'
import Navbar from './Navbar'

export default function OrderDialog() {
  return (
    <div className='flex flex-col w-[70%] h-[70%] z-100 bg-white'>
        <Navbar/>
        <h1>Order Details</h1>
    </div>
  )
}
