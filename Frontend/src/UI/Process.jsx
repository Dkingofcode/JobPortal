import React from 'react';
import EllipseOne from "../assets/Ellipse 329.png"
import EllipseTwo from "../assets/Ellipse 331.png"

const Process = () => {
  return (

    <div>
      <h1>How We Do?.</h1>

     <div className='step'>
       <img src={EllipseOne} alt='step One icon' />
       <h4>STEP 1: COMPLETE PROFILE</h4>
       <p>Once you are approved, we showcase you to leading UK technology startups</p>
     </div>

     <div className='step'>
       <img src={EllipseTwo} alt='step One icon' />
       <h4>STEP 2: RECIEVE JOB OFFERS</h4>
       <p>Companies start sending interview requests, talk to only the ones you like.</p>
     </div>

     <div className='step'>
       <img src={EllipseOne} alt='step One icon' />
       <h4>STEP 3: ACCEPT DREAM JOB</h4>
       <p>Compare your offers, and accept the best one, Hired!</p>
     </div>
    </div>
  
)
}

export default Process;