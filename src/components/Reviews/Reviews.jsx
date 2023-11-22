import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import cardimg1 from '../../assets/images/img_maskgroup_60x59.png';
import cardimg2 from '../../assets/images/img_rectangle952_59x59.png';
import cardimg3 from '../../assets/images/img_rectangle952.png';
import quotes from '../../assets/images/img_quotes.svg';
import './styles.css'
// img_rectangle952.png

function Reviews() {
  return (
    <Container className='containerDiv1' fluid>
        <Row>
            <Col sm="6" className='pr-3'>
                <Row className='d-flex justify-content-center align-items-center'>
                    <div className='w-75'>
                    <h1 className='mb-0 pb-0'>
                    What our early access users say about
                    </h1>
                    <h1 className='text-info mt-0 pt-0'>Travelout</h1>
                    </div>
                    {/* <h1>Travelout</h1> */}
                </Row>

                {/* left card */}
                <Row className='d-flex justify-content-end align-items-center mt-5'>
                    <Card className='w-75 mb-4' style={{marginRight:"20px"}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>"The best experience to find a personality matched travel buddy"</Card.Title>
                        <Card.Text>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat aute irure dolor in non proident
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                        <Container className='p-0' fluid>
                            <Row>
                                <Col xs="3" lg="2">
                                    <img src={cardimg1} width={60} height={60} className='rounded-circle' style={{backgroundColor:"#87CEEB"}}/>
                                </Col>
                                <Col>
                                <div>
                                <p className='mb-0'><strong>Sophia Moore</strong></p>
                                <p className='mt-0'>Berlin</p>
                                </div>
                                </Col>
                                <Col className='d-flex justify-content-end'>
                                    <img src={quotes} />
                                </Col>
                            </Row>
                            
                        </Container>
                    </Card.Body>
                    </Card>
                </Row>
            </Col>

            {/* right column */}
            <Col sm="6">
                {/* right card */}
            <Row className='d-flex justify-content-start align-items-center'>
                    <Card className='w-75 mb-4'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>"The best experience to find a personality matched travel buddy"</Card.Title>
                        <Card.Text>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat aute irure dolor in non proident
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                        <Container className='p-0' fluid>
                            <Row>
                                <Col xs="3" lg="2">
                                    <img src={cardimg3} width={60} height={60}/>
                                </Col>
                                <Col>
                                <div>
                                <p className='mb-0'><strong>Jake Joseph</strong></p>
                                <p className='mt-0'>Berlin</p>
                                </div>
                                </Col>
                                <Col className='d-flex justify-content-end'>
                                    <img src={quotes} />
                                </Col>
                            </Row>
                            
                        </Container>
                    </Card.Body>
                    </Card>
                </Row>

                {/* right card */}
                <Row className='d-flex justify-content-start align-items-center'>
                    <Card className='w-75'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>"The best experience to find a personality matched travel buddy"</Card.Title>
                        <Card.Text>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat aute irure dolor in non proident
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                        <Container className='p-0' fluid>
                            <Row>
                                <Col xs="3" lg="2">
                                    <img src={cardimg2} width={60} height={60}/>
                                </Col>
                                <Col>
                                <div>
                                <p className='mb-0'><strong>Olivia Barbosa</strong></p>
                                <p className='mt-0'>Berlin</p>
                                </div>
                                </Col>
                                <Col className='d-flex justify-content-end'>
                                    <img src={quotes} />
                                </Col>
                            </Row>
                            
                        </Container>
                    </Card.Body>
                    </Card>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews