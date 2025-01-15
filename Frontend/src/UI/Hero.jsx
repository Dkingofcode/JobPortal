import React from 'react';
import searchIcon from "../assets/MagnifyingGlass.png";
import locationIcon from "../assets/MapPinLine.png";
import Group1 from "../assets/Group 6265.png";
import Group2 from "../assets/Group 48096257.png";
import Group3 from "../assets/Group 48096258.png"

const Hero = () => {
  return (

    <div>
    <div className="hero text-center align-middle border border-gray-50 bg-gradient-to-b from-gray-200 to-gray-50 p-10">
      <h1 className='font-bold text-lg text-4xl text-middle'>Find your <span className='text-purple-600'>new job</span> today</h1>
      <p>Thousands of jobs in the computer, engineering and technology sectors are waiting for you</p>

        <div className="search-box flex items-center justify-center">
            <div className='border bg-slate-50 border-gray-400 flex justify-between items-center p-2'>
             <img src={searchIcon} alt='search icon' />    
            <input type="text" placeholder="what position are you looking for?" />
            </div>

            <div className='border bg-slate-50 border-gray-400 flex justify-between items-center p-2'>
             <img src={locationIcon} alt='pin icon' />   
            <input type="text" placeholder="Location" />
            </div>
            <button className='p-2 border border-purple-600 bg-purple-600 text-gray-50'>Search</button>
          </div>
        

        <div className='HeroImages relative'>
            <img src={Group1} className="z-10"  alt='hero background grafitti' />
            <img className='bg-gray-50' src={Group2}  alt='hero background grafitti' />
           <img className='absolute top-0 z-10' src={Group3} alt='Image Poster' />  
        </div>


      </div>
     </div>
  )
}

export default Hero;