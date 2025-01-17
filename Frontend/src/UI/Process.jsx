import React from 'react';
import EllipseOne from "../assets/Ellipse 329.png";
import EllipseTwo from "../assets/Ellipse 331.png";
import File from "../assets/fileIcon.jpg";
import Offer from "../assets/Group.png";
import Accept from "../assets/Vector (3).png";

const Process = () => {
  return (
    <div className='bg-purple-100 text-center p-5'>
      <h1 className='font-extrabold text-2xl'>How We Do?.</h1>


     <div className='flex justify-between align-middle'>
     
     <div className='step flex flex-col items-center border border-red-300'>
       <img className='relative' src={EllipseOne} alt='step One icon' />
       <img className='w-10 absolute' src={File} alt='step one image' />
       <h4>STEP 1: COMPLETE PROFILE</h4>
       <p>Once you are approved, we showcase you to leading UK technology startups</p>
     </div>

     <div className='step flex flex-col items-center border border-red-300'>
       <img className='relative' src={EllipseTwo} alt='step two icon' />
       <img className='absolute' src={Offer} alt="step two image" />
       <h4>STEP 2: RECIEVE JOB OFFERS</h4>
       <p>Companies start sending interview requests, talk to only the ones you like.</p>
     </div>

     <div className='step flex flex-col items-center border border-red-300'>
       <img className='relative' src={EllipseOne} alt='step three icon' />
       <img className='absolute' src={Accept} alt='step three image'  />
       <h4>STEP 3: ACCEPT DREAM JOB</h4>
       <p>Compare your offers, and accept the best one, Hired!</p>
     </div>

     </div>
     
    </div>
  
)
}

export default Process;