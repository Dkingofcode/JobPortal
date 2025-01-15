import React from 'react'
import Logo from '../assets/logo-with tag.png'
import InstagramIcon from "../assets/instagram logo.png";
import TwitterIcon from "../assets/Vector (1).png";
import FacebookIcon from "../assets/facebok.png";
import LinkedInIcon from "../assets/Vector (2).png";

const Footer = () => {
  return (
    <div>
        
      <div>
      <img src={Logo} />
        <p>Reach out to us on our social media handles, and contacts. </p> 
        <div>
            <p><img src={FacebookIcon} alt='facebook icon' /></p>
            <p><img src={TwitterIcon} alt='twitter icon' /></p>
            <p><img src={LinkedInIcon} alt='linkedIn icon' /></p>
            <p><img src={InstagramIcon} alt='instagram icon' /></p>
        </div>
        </div>

        <div>
            <h4>Home</h4>
            <p>Product</p>
            <p>Product</p>
            <p>Product</p>
            <p>Product</p>
        </div>

        <div>
            <h4>Course</h4>
            <p>HTML & CSS</p>
            <p>javascript</p>
            <p>Product</p>
            <p>Product</p>
        </div>

        <div>
            <h4>Article</h4>
            <p>New</p>
            <p>Old</p>
            <p>Trend</p>
            <p>Popular</p>
        </div>

        <div>
            <h4>Contact Us</h4>
            <p>sghjkuljhukuli</p>
        </div>
    </div>
  )
}

export default Footer;