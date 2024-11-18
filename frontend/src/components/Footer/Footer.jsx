import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            
            <p>This website is just for my portfolio, it's not a real website.</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contact</h2>
            <ul>
              <li>+91-9465516464</li>
              <li>contact@tastetribe.com</li>
              <li>Janakiraman 221701023</li>
              <li>Junide chris 221701026</li>
              <li>Harshath 221701019</li>
              <li>Keerthi Achuthan 221701030</li>
          
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 © Taste Tribe.com - All rights reserved.</p>
    </div>
  )
}

export default Footer