import React from 'react';
import { ReactComponent as FileIcon } from '../assets/fileIcon.svg';
import { ReactComponent as OfferIcon } from '../assets/offerIcon.svg';
import { ReactComponent as AcceptIcon } from '../assets/acceptIcon.svg';

const Process = () => {
  return (
    <div className='bg-purple-100 text-center py-16 px-8'>
      <h1 className='font-extrabold text-3xl mb-12'>How We Do?</h1>
      <div className='flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8'>
        <div className='step flex flex-col items-center text-center'>
          <div className='w-20 h-20 mb-4 flex items-center justify-center border border-gray-300 bg-green-200 p-5 rounded-full'>
            <FileIcon className='w-full h-full' />
          </div>
          <h4 className='font-bold text-lg mb-2'>STEP 1: COMPLETE PROFILE</h4>
          <p className='text-gray-700'>
            Once you are approved, we showcase you to leading UK technology startups
          </p>
        </div>

        <div className='step flex flex-col items-center text-center'>
          <div className='w-20 h-20 mb-4 flex items-center justify-center border border-gray-300 bg-gray-700 p-5 rounded-full'>
            <OfferIcon className='w-full h-full text-white' />
          </div>
          <h4 className='font-bold text-lg mb-2'>STEP 2: RECEIVE JOB OFFERS</h4>
          <p className='text-gray-700'>
            Companies start sending interview requests, talk to only the ones you like.
          </p>
        </div>

        <div className='step flex flex-col items-center text-center'>
          <div className='w-20 h-20 mb-4 flex items-center justify-center border border-gray-300 bg-green-200 p-5 rounded-full'>
            <AcceptIcon className='w-full h-full' />
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
