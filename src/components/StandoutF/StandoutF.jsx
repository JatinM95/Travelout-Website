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
                <h4 className='mt-4'>32K+ people travelling</h4>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </Col>
            <Col xs="12" lg="4" className='text-center p-3'>
                <img src={icon2} width={'100px'} height={'100px'}/>
                <h4 className='mt-4'>Insurance available</h4>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </Col>
            <Col xs="12" lg="4" className='text-center p-3'>
                <img src={icon3}/>
                <h4 className='mt-4'>Security Warranty</h4>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default StandoutF