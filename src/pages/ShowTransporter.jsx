import React from 'react'
import Navbar from '../components/Navbar'
import { ShowTransportCard } from '../components/LongCard'
import vehicle1 from '../assets/images/vehicle1.png'
import vehicle2 from '../assets/images/vehicle2.jpeg'
import { Alert } from '@material-tailwind/react'
export default function ShowTransporter() {
    const transport=[
        {
            name:' Jai Transport',
            vehicle: 'Tata Prima',
            number:'CG 04 1089',
            quantity: '30 Ton',
            rate:'3 /-',
            insurance:'Available',
            eta: '3 Days',
            image: vehicle1

        },
        {
            name:' Jai Transport',
            vehicle: 'Tata Prima',
            number:'CG 04 1089',
            quantity: '30 Ton',
            rate:'3 /-',
            insurance:'Available',
            eta: '3 Days',
            image:vehicle2

        }
    ]
    
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <h1 className='text-2xl  font-bold text-[#045930] self-center'>All Available Transporter</h1>
        <div className='flex flex-row justify-evenly flex-wrap'>
                {transport.map((data)=>{
                    return <ShowTransportCard name={data.name} Insurance={data.insurance} number={data.number} expectedDelivery={data.eta} rate={data.rate} vehicle={data.vehicle} image={data.image}/>
                })}
        </div>
    </div>
  )
}
