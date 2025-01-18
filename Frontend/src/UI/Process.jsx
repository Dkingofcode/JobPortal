import React from 'react';
import EllipseOne from "../assets/Ellipse 329.png";
import EllipseTwo from "../assets/Ellipse 331.png";
import File from "../assets/fileIcon.jpg";
import Offer from "../assets/Group.png";
import Accept from "../assets/Vector (3).png";

const Process = () => {
  return (
    <div className='bg-purple-100 text-center p-15 h-70'>
      <h1 className='font-extrabold text-2xl'>How We Do?.</h1>


     <div className='flex justify-between align-middle'>
     
     <div className='step flex flex-col items-center'>
       <img className='w-10 border border-gray-300 bg-green-200 p-5 rounded-[50%]' src={File} alt='step one image' />
       <h4>STEP 1: COMPLETE PROFILE</h4>
       <p>Once you are approved, we showcase you to leading UK technology startups</p>
     </div>

     <div className='step flex flex-col items-center'>
       <img className='w-10 border border-gray-300 text-white bg-gray-700 p-5 rounded-[50%]' src={Offer} alt="step two image" />
       <h4>STEP 2: RECIEVE JOB OFFERS</h4>
       <p>Companies start sending interview requests, talk to only the ones you like.</p>
     </div>

     <div className='step flex flex-col items-center'>
       <img className='w-10 border border-gray-300 bg-green-200 p-5 rounded-[50%]' src={Accept} alt='step three image'  />
       <h4>STEP 3: ACCEPT DREAM JOB</h4>
       <p>Compare your offers, and accept the best one, Hired!</p>
     </div>

     </div>
     
    </div>
  
)
}

export default Process;