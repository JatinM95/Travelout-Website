import React from 'react'
import Navbar1 from '../Navbar/Navbar'
import logo from '../../assets/images/img_frame1116605564_white_a700.svg'
import overlayslide from '../../assets/images/img_62b342e93a6b3e0aaad173c0png.png'
import './styles.css'

function Aboutusface() {
  return (
    <div className='bg-info position-relative'>
        <Navbar1 logo={logo} background={1}/>
        <div className='text-center faceText'>
            <p className='text-light'>ABOUT US</p>
            <h1 className='text-light'>
                We want to make travelling
            </h1>
            <h1 className='text-light'>
                fun, safe and more social
            </h1>
        </div>
        <img
        src={overlayslide}
        className='w-100 position-absolute bottom-0 d-block' 
        />
    </div>
  )
}

export default Aboutusface