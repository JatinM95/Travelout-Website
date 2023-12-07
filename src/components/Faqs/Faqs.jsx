import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion';
import './styles.css'

function Faqs() {
  return (
    <Container className='containerDiv' fluid>
        <h1 className='w-50 m-auto text-center'>
            Join the waitlist to find your future travel buddy
        </h1>
        <Button className='rounded-pill text-light btn m-auto d-block mt-5' style={{backgroundColor:"#0098D6"}}>Join the waitlist</Button>
        <Row className='faq_content'>
            <Col md="6" sm="6" lg="6" className='d-flex align-items-center justify-content-center'>
                <h1 className='w-75'>Frequently asked questions</h1>
            </Col>
            <Col md="6" sm="6" lg="5">
            <Accordion className='m-auto' flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h6>How Does Your App Ensure a Genuine Connection Between Travel Buddies?</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                    We understand the importance of meaningful connections. Our app goes beyond surface interests, using innovative algorithms to match you with travel buddies who share not just your destinations but also your passion for the emotional depth of the journey. Your travel companion is not just a co-traveler; they're a kindred spirit on the adventure of a lifetime.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h6>How Does the App Cater to Different Travel Personalities?</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                    Every traveler is unique, and so are their preferences. Our app is designed to celebrate diversity in travel styles. Whether you're an adrenaline junkie seeking thrills or a cultural enthusiast savoring every moment, we ensure that your travel personality is not just acknowledged but celebrated. Your journey, your way, with a companion who resonates with your emotional approach to travel.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h6>What Safety Measures Does Your App Have in Place?</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                    Safety is paramount. Our app is equipped with advanced safety features, from secure communication channels, real-time location sharing to different user verification stages. We understand the emotional importance of feeling secure, and we're committed to providing a platform where you can explore freely while having the peace of mind that your safety is our top priority.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <h6>How Can Your App Enhance the Emotional Aspect of Solo Travel?</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                    Solo travel is not just a physical journey; it's a deeply emotional experience. Our app is crafted to enhance the emotional aspects of solo adventures by connecting you with companions who resonate with your inner wanderer. From sharing sunsets on a beach to exploring ancient alleyways hand in hand, we believe in turning solo escapades into emotionally enriching odysseys.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <h6>How Does Your App Foster Lasting Connections Beyond the Trip?</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                    We believe that the bonds formed during travel should extend beyond the journey itself. Our app is designed to foster lasting connections, encouraging you and your travel buddy to continue sharing experiences, memories, and emotional adventures even after you've reached your destination. Because the end of the trip doesn't have to mean the end of a beautiful connection.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Col>
        </Row>
    </Container>
  )
}

export default Faqs