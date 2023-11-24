import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import founder1 from "../../assets/images/img_62b45a6fdc8fb83.png"
import founder2 from "../../assets/images/img_62b45a70a08ac70.png"
import founder3 from "../../assets/images/img_62b45a70257527d.png"
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
            <Image src={founder1} rounded fluid/>
            <p className='mt-3 mb-0'>FOUNDER & CEO</p>
            <h4>Jane Cooper</h4>
            </Col>
            <Col sm="4" className='p-5'>
            <Image src={founder2} rounded fluid/>
            <p className='mt-3 mb-0'>CO-FOUNDER & CMO</p>
            <h4>Wade Warren</h4>
            </Col>
            <Col sm="4" className='p-5'>
            <Image src={founder3} rounded fluid/>
            <p className='mt-3 mb-0'>CO-FOUNDER & CTO</p>
            <h4>Kristin Watson</h4>
            </Col>
        </Row>
    </Container>
  )
}

export default JoinOurTeam