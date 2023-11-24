import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide1 from '../../assets/images/img_bgimg12.png'
import slide2 from '../../assets/images/img_bgimg11_1121x1512.png'
import slide3 from '../../assets/images/img_bgimg11_1117x1512.png'
import overlayslide from '../../assets/images/img_62b342e93a6b3e0aaad173c0png.png'
import './styles.css'
import EmailWaitlist from '../EmailWaitlist/EmailWaitlist'

function Slider() {
  return (
    <>
    <Carousel indicators={false}>
        <Carousel.Item>
            <div className='position-relative'>
            <img className='d-block w-100' src={slide1} alt='first slide' />
            <img 
            className='bottom-image position-absolute w-100 start-50 translate-middle-x overlayimg' 
            src={overlayslide} 
            alt='overlay slide'
            />
            </div>
            <Carousel.Caption className='carousel-caption'>
                <h3 className='font-weight-bolder text-dark text-center first-slide-text'>Travel with your personality matched people</h3>
                <div className='bg-light rounded-pill border first-slide-div'>
                    <EmailWaitlist />
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className='position-relative'>
            <img className='d-block w-100' src={slide2} alt='second slide' />
            <img 
            className='bottom-image position-absolute w-100 start-50 translate-middle-x overlayimg' 
            src={overlayslide} 
            alt='overlay slide'
            />
            </div>
            <Carousel.Caption className='carousel-caption'>
                <h3 className='font-weight-bolder text-dark text-center first-slide-text'>Connect instantly and plan your upcoming trip</h3>
                <div className='bg-light rounded-pill border first-slide-div'>
                    <EmailWaitlist />
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className='position-relative'>
            <img className='d-block w-100' src={slide3} alt='third slide' />
            <img 
            className='bottom-image position-absolute w-100 start-50 translate-middle-x overlayimg' 
            src={overlayslide} 
            alt='overlay slide'
            />
            </div>
            <Carousel.Caption className='carousel-caption'>
                <h3 className='font-weight-bolder text-dark text-center first-slide-text'>Discover experiences and shop at great discounts</h3>
                <div className='bg-light rounded-pill border first-slide-div'>
                    <EmailWaitlist />
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider