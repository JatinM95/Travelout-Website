import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import cardimg1 from '../../assets/images/img_maskgroup_60x59.webp';
import cardimg2 from '../../assets/images/img_rectangle952_59x59.webp';
import cardimg3 from '../../assets/images/img_rectangle952.webp';
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
                    <h1 className='text-info mt-0 pt-0'>travelout</h1>
                    </div>
                    {/* <h1>Travelout</h1> */}
                </Row>

                {/* left card */}
                <Row className='d-flex justify-content-end align-items-center mt-5'>
                    <Card className='w-75 mb-4' style={{marginRight:"20px"}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>"Finding a Friend, Unleashing the Berlin Magic"</Card.Title>
                        <Card.Text>
                        Embarking on a solo adventure to Berlin felt like a leap of faith, but with the app, I discovered Sarah—my perfect travel buddy. From exploring hidden gems to sharing late-night laughs, every moment was enriched by the connection we forged. This app transformed my solo trip into a kaleidoscope of shared memories, turning Berlin into our playground of friendship.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                        <Container className='p-0' fluid>
                            <Row>
                                <Col xs="3" lg="2">
                                    <img src={cardimg1} width={60} height={60} className='rounded-circle' style={{backgroundColor:"#87CEEB"}}/>
                                </Col>
                                <Col>
                                <div>
                                <p className='mb-0'><strong>Emily</strong></p>
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
                        <Card.Title>"Beyond Boundaries: A Journey with a Kindred Spirit"</Card.Title>
                        <Card.Text>
                        In the heart of Stuttgart, I found more than a travel companion—I found a true friend. Thanks to the app, I connected with Lisa, whose passion for exploration mirrored mine. Our journey wasn't just about visiting landmarks; it was about discovering the magic that happens when two souls align. Stuttgart became the backdrop to a story of friendship written with every shared experience.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                        <Container className='p-0' fluid>
                            <Row>
                                <Col xs="3" lg="2">
                                    <img src={cardimg3} width={60} height={60}/>
                                </Col>
                                <Col>
                                <div>
                                <p className='mb-0'><strong>Alex</strong></p>
                                <p className='mt-0'>Stuttgart</p>
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
                        <Card.Title>"Athens Adventures: A Symphony of Shared Stories"</Card.Title>
                        <Card.Text>
                        Exploring the ancient wonders of Athens took on a new meaning when I met Michael through the app. Our connection went beyond the ruins; it echoed through the streets as we discovered the city's soul together. This app transformed my solo escapade into a symphony of shared stories, making Athens not just a destination but a chapter in our intertwined travel tale.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                        <Container className='p-0' fluid>
                            <Row>
                                <Col xs="3" lg="2">
                                    <img src={cardimg2} width={60} height={60}/>
                                </Col>
                                <Col>
                                <div>
                                <p className='mb-0'><strong>Sofia</strong></p>
                                <p className='mt-0'>Athens</p>
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