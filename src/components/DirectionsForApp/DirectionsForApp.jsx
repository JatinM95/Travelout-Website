import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import iphone1 from '../../assets/images/img_iphone14pro.svg'
import iphoneInner1 from '../../assets/images/Image_Here.svg';
import iphoneInner2 from '../../assets/images/Image_Here_2.svg';
import iphoneInner3 from '../../assets/images/Image_Here_3.svg';
import iphoneInner4 from '../../assets/images/Image_Here_4.svg';
import iphoneInner5 from '../../assets/images/Image_Here_5.svg';
import './styles.css'

function DirectionsForApp() {
  return (
    <Container className='mt-5 containerDivDforApp'>
      {/* Row Head text*/}
        <Row className='mb-5'>
            <Col>
            <h3 className='font-weight-bolder m-auto text-center textHead' style={{fontSize:"3rem"}}>
                How to find your travel buddy?
            </h3>
            </Col>
        </Row>

        {/* Row1 with text and image */}
        <Row className='justify-content-between'>
          <Col sm='12' md="12" lg="6" className='d-flex align-items-center justify-content-center'>
            <div className='sidetext'>
            <h2>Download the app</h2>
            <p>Download our app and take the first exciting step towards finding your perfect travel buddy. Whether you choose the simplicity of phone number registration or the personalized touch of email, your journey to unforgettable adventures begins with a click.</p>
            </div>
          </Col>
          <Col lg="6" sm="12">
          <div className='position-relative d-flex justify-content-center'>
            <img className='d-block text-center' src={iphone1} alt='iphone frame' />
            <img 
            className='position-absolute inscreen d-block m-auto' 
            src={iphoneInner1} 
            alt='overlay slide'
            />
            </div>
          </Col>
        </Row>

        {/* Row2 with text and image */}
        <Row className='justify-content-between mt-5'>
          <Col sm='12' md="12" lg="6" className='d-flex align-items-center justify-content-center'>
            <div className='sidetext'>
            <h2>Set travel preferences</h2>
            <p>Set your preferences and unveil the essence of your travel personality. Are you an adrenaline seeker, a culture connoisseur, or a laid-back wanderer? By customizing your profile, you're not just sharing details; you're painting a canvas that reflects the adventurous spirit within, making it easier to discover that travel buddy who complements your journey style. Your preferences, your story—let the matchmaking begin!</p>
            </div>
          </Col>
          <Col lg="6" sm="12">
          <div className='position-relative d-flex justify-content-center'>
            <img className='d-block text-center' src={iphone1} alt='iphone frame' />
            <img 
            className='position-absolute inscreen d-block m-auto' 
            src={iphoneInner2} 
            alt='overlay slide'
            />
            </div>
          </Col>
        </Row>

        {/* Row3 with text and image */}
        <Row className='justify-content-between mt-5'>
          <Col sm='12' md="12" lg="6" className='d-flex align-items-center justify-content-center'>
            <div className='sidetext'>
            <h2>Swipe to get matched</h2>
            <p>Swipe through profiles that resonate with your travel dreams and aspirations. It's not just about finding a travel buddy; it's about connecting with someone whose path intertwines seamlessly with yours. With each swipe, you're not just choosing a companion; you're embracing a potential lifelong friend, a co-adventurer, and a kindred spirit. Let the swiping adventure unfold, leading you to a match made in travel heaven!</p>
            </div>
          </Col>
          <Col lg="6" sm="12">
          <div className='position-relative d-flex justify-content-center'>
            <img className='d-block text-center' src={iphone1} alt='iphone frame' />
            <img 
            className='position-absolute inscreen d-block m-auto' 
            src={iphoneInner3} 
            alt='overlay slide'
            />
            </div>
          </Col>
        </Row>

        {/* Row4 with text and image */}
        <Row className='justify-content-between mt-5'>
          <Col sm='12' md="12" lg="6" className='d-flex align-items-center justify-content-center'>
            <div className='sidetext'>
            <h2>Chat or talk instantly</h2>
            <p>Dive into heartfelt conversations through chat or elevate the connection with the warmth of your voice or the intimacy of a video call. It's not just about planning itineraries; it's about sharing laughter, dreams, and building a bond that transcends miles. Your journey begins not just when you travel but the moment you connect. Get ready to experience the joy of instant companionship, turning every conversation into a cherished chapter of your shared adventure.</p>
            </div>
          </Col>
          <Col lg="6" sm="12">
          <div className='position-relative d-flex justify-content-center'>
            <img className='d-block text-center' src={iphone1} alt='iphone frame' />
            <img 
            className='position-absolute inscreen d-block m-auto' 
            src={iphoneInner4} 
            alt='overlay slide'
            />
            </div>
          </Col>
        </Row>

        {/* Row5 with text and image */}
        <Row className='justify-content-between mt-5'>
          <Col sm='12' md="12" lg="6" className='d-flex align-items-center justify-content-center'>
            <div className='sidetext'>
            <h2>Explore and plan the trip</h2>
            <p></p>
            </div>
          </Col>
          <Col lg="6" sm="12">
          <div className='position-relative d-flex justify-content-center'>
            <img className='d-block text-center' src={iphone1} alt='iphone frame' />
            <img 
            className='position-absolute inscreen d-block m-auto' 
            src={iphoneInner5} 
            alt='overlay slide'
            />
            </div>
          </Col>
        </Row>
    </Container>
  )
}

export default DirectionsForApp