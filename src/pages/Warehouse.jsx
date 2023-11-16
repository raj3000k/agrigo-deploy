import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import TransportDrawer from '../components/TransportDrawer';

const Warehouse = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="bg-[#d8e6ed] h-full flex flex-col">
      <div className="bg-[#ffde59] w-full py-2 flex flex-row justify-between px-4">
        <div className="flex items-center">
          <button onClick={() => setDrawer(!drawer)}>
            <AiOutlineMenu color="black" size={36} />
          </button>
          <h1 className="text-black font-bold text-2xl ml-4">User</h1>
        </div>
        <h1 className="text-black font-bold text-2xl mr-2">Warehouse</h1>
      </div>

      {drawer && <TransportDrawer />}

      <div className="flex flex-row mt-6 p-8 justify-evenly">
        <div className="flex flex-col space-y-4 w-1/3">
          <div className="bg-[#ffde59] p-4 rounded-xl font-bold text-center">
            <h1 className="font-bold">Available Orders</h1>
          </div>
          <div className="bg-[#00bf63] p-4 rounded-xl font-bold flex flex-col space-y-2">
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover:bg-[#74dfab]">
                <h1>2 Ton Rice - Jaipur</h1>
              </div>
            </button>
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover:bg-[#74dfab]">
                <h1>3 TON WHEAT - Jaipur</h1>
              </div>
            </button>
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover:bg-[#74dfab]">
                <h1>4 TON RICE - Bhilai</h1>
              </div>
            </button>
            {/* Additional creative button */}
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover:bg-[#74dfab]">
                <h1>5 TON CORN - Chennai</h1>
              </div>
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4 w-1/3">
          <div className="bg-[#00bf63] p-4 rounded-xl font-bold text-center">
            <h1 className="font-bold">Update Repository</h1>
          </div>
          <div className="bg-[#009201] p-4 rounded-xl font-bold flex flex-col space-y-2">
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover:bg-[#74dfab]">
                <h1>Rice</h1>
                <h2>Grade 1: 1 ton (40k per ton)</h2>
                <h2>Grade 2: 3 ton (65k per ton)</h2>
              </div>
            </button>
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover:bg-[#74dfab]">
                <h1>Wheat</h1>
                <h2>Grade 1: 2 ton (35k per ton)</h2>
                <h2>Grade 2: 4 ton (60k per ton)</h2>
              </div>
            </button>
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover:bg-[#74dfab]">
                <h1>Corn</h1>
                <h2>Grade 1: 1.5 ton (50k per ton)</h2>
                <h2>Grade 2: 2.5 ton (70k per ton)</h2>
              </div>
            </button>
            {/* Additional creative button */}
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover:bg-[#74dfab]">
                <h1>Barley</h1>
                <h2>Grade 1: 1.5 ton (45k per ton)</h2>
                <h2>Grade 2: 2 ton (55k per ton)</h2>
              </div>
            </button>
          </div>
          <button className='h-auto w-auto bg-blue-400 rounded-xl text-white'>Update Repository</button>
        </div>

        <div className="flex flex-col space-y-4 w-1/3">
          <div className="bg-[#ffde59] p-4 rounded-xl font-bold text-center">
            <h1 className="font-bold">Goods in Transit</h1>
          </div>
          <div className="bg-[#00bf63] p-4 rounded-xl font-bold flex flex-col space-y-2">
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover-bg-[#74dfab]">
                <h1>1.5Kg Rice</h1>
                <h1>Raipur-Delhi View Details...</h1>
              </div>
            </button>
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover-bg-[#74dfab]">
                <h1>1 Ton Rice</h1>
                <h1>Raipur-Delhi View Details...</h1>
              </div>
            </button>
            {/* Additional creative button */}
            <button>
              <div className="bg-[#d8e6ed] p-4 rounded-xl font-bold text-center hover-bg-[#74dfab]">
                <h1>500g Corn</h1>
                <h1>Bhilai-Kolkata View Details...</h1>
              </div>
            </button>
            </div>
            <div className="mt-auto flex justify-end pr-4">
              <a href='/'>
              <button className="bg-[#ff5b5b] text-white px-4 py-2 rounded-full font-bold" >
          <h1>Log Out</h1>
        </button>
              </a>
        
      </div>
          </div>
       
      </div>
    </div>
    
  );
};

export default Warehouse;