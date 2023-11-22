import React from 'react'
import logo from '../../assets/images/img_frame1116605564_white_a700.svg'
import instalogo from '../../assets/images/instagram.png'
import twitterlogo from '../../assets/images/twitter.png'
import linkedinlogo from '../../assets/images/linkedin.png'
import tiktoklogo from '../../assets/images/tiktok.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-info pt-5'>
        {/* <div ></div> */}
        <img src={logo} alt="travelout logo" className='d-block m-auto'/>
        <div className='d-flex justify-content-center text-light mt-4 pb-3'>
          <Link to="/about" className='me-3 text-light btn'>About us</Link>
          <Link className='me-3 text-light btn'>Our Stories</Link>
          <Link className='me-3 text-light btn'>Privacy policy</Link>
        </div>
        <div className='m-auto pb-4 pt-4 d-flex border-top justify-content-between' style={{width:"85%"}}>
            <p className='m-0 text-light'>Copyright © 2023 Travelout All rights reserved</p>
            <div>
                <img src={instalogo} alt="insta logo" className='me-3' />
                <img src={twitterlogo} alt="twitter logo" className='me-3' />
                <img src={linkedinlogo} alt="linkedin logo" className='me-3' />
                <img src={tiktoklogo} alt="tiktok logo" />
            </div>
        </div>

    </div>
  )
}

export default Footer