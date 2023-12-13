import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import founder1 from "../../assets/images/founder1.jpeg"
import founder2 from "../../assets/images/founder2.jpeg"
import founder3 from "../../assets/images/founder3.jpg"
import linkedinLogo from "../../assets/images/linkedin_profile_logo.png"
import Image from 'react-bootstrap/Image';
import './styles.css'

function JoinOurTeam() {
  return (
    <Container className='containerDivteam'>
        <Row>
            <h1 className='text-center m-auto teamHead'>
                We are a team of creativity <br /> and software nerdiness.
            </h1>
        </Row>
        <Row className='mt-5 mb-4'>
            <Button variant='dark' className='p-3 rounded-pill m-auto joinBtn'>JOIN OUR TEAM &nbsp; ↗</Button>
        </Row>
        <Row className='text-center'>
            <Col sm="4" className='p-5'>
            <Image src={founder1} roundedCircle fluid/>
            <p className='mt-3 mb-0'>CO-FOUNDER & CEO</p>
            <h4>Theodora Chatzipavlidis</h4>
            <a href="https://www.linkedin.com/in/theodora-chatzipavlidis/"><img src={linkedinLogo} alt="linkedin logo" /></a>
            </Col>
            <Col sm="4" className='p-5'>
            <Image src={founder2} roundedCircle fluid/>
            <p className='mt-3 mb-0'>CO-FOUNDER & COO</p>
            <h4>Parashos Nikoloudis</h4>
            <a href="https://www.linkedin.com/in/parashos-nikoloudis-668a121a9/"><img src={linkedinLogo} alt="linkedin logo" /></a>
            </Col>
            <Col sm="4" className='p-5'>
            <Image src={founder3} roundedCircle fluid/>
            <p className='mt-3 mb-0'>CO-FOUNDER & CTO</p>
            <h4>Bhupendra Singh</h4>
            <a href="https://www.linkedin.com/in/bhupendra-singh-2856104b/"><img src={linkedinLogo} alt="linkedin logo" /></a>
            </Col>
        </Row>
    </Container>
  )
}

export default JoinOurTeam