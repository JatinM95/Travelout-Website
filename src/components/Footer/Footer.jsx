import React from 'react'
import logo from '../../assets/images/img_frame1116605564_white_a700.svg'
import instalogo from '../../assets/images/instagram.png'
import facebookLogo from '../../assets/images/facebook.png'
import linkedinlogo from '../../assets/images/linkedin.png'
import tiktoklogo from '../../assets/images/tiktokicon.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='pt-5' style={{backgroundColor:"#078FC7"}}>
        {/* <div ></div> */}
        <img src={logo} alt="travelout logo" className='d-block m-auto'/>
        <div className='d-flex justify-content-center text-light mt-4 pb-3'>
          <Link to="/about" className='me-3 text-light btn'>About us</Link>
          <Link to="/our_stories" className='me-3 text-light btn'>Our Stories</Link>
          <Link to="/privacy_policy" className='me-3 text-light btn'>Privacy policy</Link>
        </div>
        <div className='m-auto pb-4 pt-4 d-flex border-top justify-content-between' style={{width:"85%"}}>
            <p className='m-0 text-light'>Copyright © 2023 Travelout All rights reserved</p>
            <div>
                <a href="https://www.instagram.com/travelout_now/"><img src={instalogo} alt="insta logo" className='me-3' /></a>
                <a href="https://www.facebook.com/traveloutRightnow/"><img src={facebookLogo} width={32} height={32} alt="fb logo" className='me-3' /></a>
                <a href="https://www.linkedin.com/company/travelout-now/"><img src={linkedinlogo} alt="linkedin logo" className='me-3' /></a>
                <a href="https://www.tiktok.com/@travelout_now"><img src={tiktoklogo} alt="tiktok logo" /></a>
            </div>
        </div>

    </div>
  )
}

export default Footer