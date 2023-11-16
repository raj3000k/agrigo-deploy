import React from "react";
import Navbar from "../components/Navbar";
import { LongCardImage } from "../components/LongCard";
import druver1 from '../assets/images/driver1.jpg'

import druver2 from '../assets/images/driver2.jpg'

const DriverDetails=()=>{
    return(
        <div className="flex flex-col">
            <Navbar/>
            <div className='bg-[#00bf63] w-auto h-auto p-4 rounded-xl font-bold items-center flex justify-center m-4 text-lg'>
                <h1 className='font-bold justify-items-center text-white'>Driver Details</h1>
            </div>
            <button className='bg-[#5271ff] p-2 rounded-2xl text-white font-bold w-[30%] self-center'>Add Driver</button>
            <div className=' rounded-xl font-bold flex flex-col space-y-2 justify-center items-center mx-4'>

                <LongCardImage field1={'Driver Name'} value1={'Suresh Sahu'} field2={'DOB'} value2={'23 Dec 1998'} field3={'License Number'} value3={'CG-125678'} field4={'Work Status'} value4={'Free'} value5={"Verified"} field5={'Verification'} image={druver1} />
                <LongCardImage field1={'Driver Name'} value1={'Piyush Bisen'} field2={'DOB'} value2={'02 Nov 1995'} field3={'License Number'} value3={'CG-123669'} field4={'Work Status'} value4={'Free'} value5={"Verified"} field5={'Verification'} image={druver2}/>

            </div>
        </div>
    )
}

export default DriverDetails