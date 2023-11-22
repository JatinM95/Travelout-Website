import React from 'react'
import logo from '../../assets/images/img_frame1116605564_white_a700.svg'
import instalogo from '../../assets/images/instagram.png'
import twitterlogo from '../../assets/images/twitter.png'
import linkedinlogo from '../../assets/images/linkedin.png'
import tiktoklogo from '../../assets/images/tiktok.png'

function Footer() {
  return (
    <div className='bg-info pt-5'>
        {/* <div ></div> */}
        <img src={logo} alt="travelout logo" className='d-block m-auto'/>
        <div className='d-flex justify-content-center text-light mt-4 pb-3'>
            <a href="about" className='me-3 text-light btn'>About us</a>
            <a href="" className='me-3 text-light btn'>Our Stories</a>
            <a href="" className='me-3 text-light btn'>Privacy policy</a>
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