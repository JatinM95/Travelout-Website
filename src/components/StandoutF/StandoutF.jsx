import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import icon3 from '../../assets/images/img_62bc173017573e1.svg';
import icon1 from '../../assets/images/img_62bc0fc16dae291.svg';
import icon2 from '../../assets/images/img_maskgroup.png';

function StandoutF() {
  return (
    <Container className='mt-5'>
        <Row>
            <Col xs="12" lg="4" className='text-center p-3'>
                <img src={icon1}/>
                <h4 className='mt-4'>Unlocking Unforgettable Moments</h4>
                <p className='mt-3'>
                Embark on a journey that transcends time as you discover that traveling isn't just about the destination, but the extraordinary moments that unfold along the way. From chance encounters with locals to breathtaking landscapes, every step becomes a chapter in your personal adventure.
                </p>
            </Col>
            <Col xs="12" lg="4" className='text-center p-3'>
                <img src={icon2} width={'100px'} height={'100px'}/>
                <h4 className='mt-4'>The Power of Cultural Connection</h4>
                <p className='mt-3'>
                Immerse yourself in the vibrant tapestry of cultures around the world, realizing that travel is a powerful bridge that connects hearts and minds. Through shared experiences and understanding, you'll find that the beauty of diversity lies in the unity it fosters among people from different corners of the globe.
                </p>
            </Col>
            <Col xs="12" lg="4" className='text-center p-3'>
                <img src={icon3}/>
                <h4 className='mt-4'>Your Story, Your Growth</h4>
                <p className='mt-3'>
                Embarking on a journey isn't just about changing your location; it's about transforming yourself. Each expedition becomes a catalyst for personal growth, pushing boundaries, and unlocking the full potential within. Travel isn't just a getaway; it's a powerful tool for self-discovery and empowerment.
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default StandoutF