import React from 'react';
import FileIcon from "../assets/icons8-image-file-50.png";
import OfferIcon from "../assets/icons8-offer-hot-price-50.png";
import AcceptIcon from "../assets/icons8-accept-50.png";

const Process = () => {
  return (
    <div className='bg-purple-100 text-center py-16 px-8'>
      <h1 className='font-extrabold text-3xl mb-12'>How We Do?</h1>
      <div className='flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8'>
        <div className='step flex flex-col items-center text-center'>
          <div className='w-20 h-20 mb-4 flex items-center justify-center border border-gray-300 bg-green-200 p-5 rounded-full'>
            <img src={FileIcon} className='w-full h-full' />
          </div>
          <h4 className='font-bold text-lg mb-2'>STEP 1: COMPLETE PROFILE</h4>
          <p className='text-gray-700'>
            Once you are approved, we showcase you to leading UK technology startups
          </p>
        </div>

        <div className='step flex flex-col items-center text-center'>
          <div className='w-20 h-20 mb-4 flex items-center justify-center border border-gray-300 bg-gray-700 p-5 rounded-full'>
            <img src={OfferIcon} className='w-full h-full text-white' />
          </div>
          <h4 className='font-bold text-lg mb-2'>STEP 2: RECEIVE JOB OFFERS</h4>
          <p className='text-gray-700'>
            Companies start sending interview requests, talk to only the ones you like.
          </p>
        </div>

        <div className='step flex flex-col items-center text-center'>
          <div className='w-20 h-20 mb-4 flex items-center justify-center border border-gray-300 bg-green-200 p-5 rounded-full'>
            <img src={AcceptIcon} className='w-full h-full' />
          </div>
          <h4 className='font-bold text-lg mb-2'>STEP 3: ACCEPT DREAM JOB</h4>
          <p className='text-gray-700'>
            Compare your offers, and accept the best one, Hired!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
