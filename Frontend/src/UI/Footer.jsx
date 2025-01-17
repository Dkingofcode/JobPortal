import React from 'react';
import Logo from '../assets/logo-with tag.png'
import InstagramIcon from "../assets/instagram logo.png";
import TwitterIcon from "../assets/Vector (1).png";
import FacebookIcon from "../assets/facebok.png";
import LinkedInIcon from "../assets/Vector (2).png";



const Footer = () => {
  return (
    <div className='bg-purple-950 text-white flex justify-between items-center pt-20 pb-20 pl-10 pr-10'>

      <div>
      <img className='w-22 h-22 p-3' src={Logo} />
        <p>Reach out to us on our social media handles, and contacts. </p> 
        <div className='flex w-26  justify-start items-center'>
            <p><img className='border border-gray-100 p-2' src={FacebookIcon} alt='facebook icon' /></p>
            <p><img className='border border-gray-100 p-2' src={TwitterIcon} alt='twitter icon' /></p>
            <p><img className='border border-gray-100 p-2' src={LinkedInIcon} alt='linkedIn icon' /></p>
            <p><img className='border border-gray-100 p-2' src={InstagramIcon} alt='instagram icon' /></p>
        </div>
        </div>

        <div>
            <h4 className='font-extrabold'>Home</h4>
            <p>Product</p>
            <p>Product</p>
            <p>Product</p>
            <p>Product</p>
        </div>

        <div>
            <h4 className='font-extrabold'>Course</h4>
            <p>HTML & CSS</p>
            <p>javascript</p>
            <p>Product</p>
            <p>Product</p>
        </div>

        <div>
            <h4 className='font-extrabold'>Article</h4>
            <p>New</p>
            <p>Old</p>
            <p>Trend</p>
            <p>Popular</p>
        </div>

        <div className='font-extrabold'>
            <h4>Contact Us</h4>
            <p>sghjkuljhukuli</p>
        </div>
    </div>
  )
}

export default Footer;