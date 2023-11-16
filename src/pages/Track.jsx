import React from 'react'
// import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from 'mapbox-gl';
import Map, { Marker } from 'react-map-gl';
import marker from '../assets/images/marker.png'
import Navbar from '../components/Navbar';

export default function Track() {
  return (
    <div className='h-full w-full'>
        <Navbar/>
        <h1 className='text-2xl  font-bold text-[#045930] self-center justify-center'>Track Status</h1>
       <Map accessToken='pk.eyJ1IjoiaGFyc2h1MDcxMSIsImEiOiJjbG9ncmpqMmsxMzNxMmlxcGpqM21uOHVjIn0.UNBaBHVEWs9ogPvEZcPyoQ' mapLib={import('mapbox-gl')} initialViewState={{
      longitude: 81.6024542,
      latitude: 21.2497222,
      zoom: 10
    }}
    style={{width:'100vw', height:'100vh'}}
    mapStyle="mapbox://styles/harshu0711/cljieeo5b002d01o40q7fdqs1" mapboxAccessToken='pk.eyJ1IjoiaGFyc2h1MDcxMSIsImEiOiJjbG9ncmpqMmsxMzNxMmlxcGpqM21uOHVjIn0.UNBaBHVEWs9ogPvEZcPyoQ' latitude={21.2497222} longitude={81.6024542} >
        <Marker latitude={21.2497222} longitude={81.6024542}>
            <h1 className='text-md text-black font-bold'>CG 04 AX 1234</h1>
            <img src={marker} className='h-12 w-12'></img>
        </Marker>
    </Map>
    </div>
  )
}   
