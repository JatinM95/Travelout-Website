import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import line from '../../assets/images/img_6259e59720a634a.svg'
import list_style from '../../assets/images/Eo_circle_light-blue_checkmark.svg'
// import first from '../../assets/images/img_6259e59720a6344.svg'
import './styles_wmud.css'


function Wmud() {
    const [dark,setDark] = useState(1);
    const [active,setActive] = useState("True");
  return (
    <Container className='containerDivmud'>
        <Row>
            <h1>What makes us different?</h1>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Row>
                    <Col>
                    <strong>
                    {/* <p style={{color:"lightgrey"}}> <span className='border'>01</span> Transperence</p> */}
                    <p role='button' style={dark===1?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(1)}> <span className='border border-dark rounded-circle me-3'>01</span>PASSION</p>
                    </strong>
                    </Col>
                    <Col>
                    <img style={dark===1?{display:"inline"}:{display:"none"}} src={line} alt="pointing-line" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <strong>
                    {/* <p style={{color:"lightgrey"}}> <span className='border'>01</span> Transperence</p> */}
                    <p role='button' style={dark===2?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(2)}> <span className='border border-dark rounded-circle me-3'>02</span>BEYOND WORDS</p>
                    </strong>
                    </Col>
                    <Col>
                    <img style={dark===2?{display:"inline"}:{display:"none"}} src={line} alt="pointing-line" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <strong>
                    {/* <p style={{color:"lightgrey"}}> <span className='border'>01</span> Transperence</p> */}
                    <p role='button' style={dark===3?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(3)}> <span className='border border-dark rounded-circle me-3'>03</span>PEOPLE FIRST</p>
                    </strong>
                    </Col>
                    <Col>
                    <img style={dark===3?{display:"inline"}:{display:"none"}} src={line} alt="pointing-line" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <strong>
                    {/* <p style={{color:"lightgrey"}}> <span className='border'>01</span> Transperence</p> */}
                    <p role='button' style={dark===4?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(4)}> <span className='border border-dark rounded-circle me-3'>04</span>PURPOSE-DRIVEN</p>
                    </strong>
                    </Col>
                    <Col>
                    <img style={dark===4?{display:"inline"}:{display:"none"}} src={line} alt="pointing-line" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <strong>
                    {/* <p style={{color:"lightgrey"}}> <span className='border'>01</span> Transperence</p> */}
                    <p role='button' style={dark===5?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(5)}> <span className='border border-dark rounded-circle me-3'>05</span>EXPERTISE</p>
                    </strong>
                    </Col>
                    <Col>
                    <img style={dark===5?{display:"inline"}:{display:"none"}} src={line} alt="pointing-line" />
                    </Col>
                </Row>
            </Col>
            <Col>
            <Row style={dark===1?{display:"block"}:{display:"none"}}>
                <h2>
                    We believe in doing things we're passionate about.
                </h2>
                <p className='mt-3 mb-4'>
                Our passion isn't just a part of our work; it's the driving force behind every line of code and every decision we make. We are not just a team; we're a collective of passionate explorers crafting an app that resonates with the emotional essence of travel.
                </p>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Building features that actually make a difference</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Letting employees take active ownership over their work</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>No burn-out from back-breaking work</span>
                </div>
            </Row>
            <Row style={dark===2?{display:"block"}:{display:"none"}}>
                <h2>
                Crafting Connections Through Communication.
                </h2>
                <p className='mt-3 mb-4'>
                Communication is not just a tool for us; it's the heartbeat of our team and the soul of our service. We don't just talk; we listen, ensuring that every word resonates with the emotions and needs of our users. Our goal is to create a dialogue that transcends functionality and becomes a genuine connection. 
                </p>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Building features that actually make a difference</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Letting employees take active ownership over their work</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>No burn-out from back-breaking work</span>
                </div>
            </Row>
            <Row style={dark===3?{display:"block"}:{display:"none"}}>
                <h2>
                Your Story, Your Journey, Our Priority.
                </h2>
                <p className='mt-3 mb-4'>
                In our world, users are not just profiles; they are the protagonists of their own travel tales. We take a human-centric approach, understanding that each user is on a unique journey, and we are here to support and enhance that journey in a way that goes beyond digital interactions. Your experience is at the forefront of every decision we make.
                </p>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Personalized User Experiences, tailored to your individual preferences.</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Tailored Solutions to Individual Needs, recognizing and addressing your unique requirements.</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>A Team That Puts People Before Pixels, understanding that behind every screen is a person with a story.</span>
                </div>
            </Row>
            <Row style={dark===4?{display:"block"}:{display:"none"}}>
                <h2>
                Beyond Code, Guided by Purpose.
                </h2>
                <p className='mt-3 mb-4'>
                Our purpose goes beyond creating an app; it's about shaping the future of travel experiences. Guided by a shared mission, we craft every aspect with purpose, ensuring that every user's journey is not just functional but purposeful.
                </p>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Purpose-driven decisions ensure our app aligns with the deeper needs of our users.</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Our collective purpose is to enhance your travel experiences, making each journey more meaningful.</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Us on a purpose-driven expedition, where every feature serves a greater mission—to enrich your emotional connection with the world.</span>
                </div>
            </Row>
            <Row style={dark===5?{display:"block"}:{display:"none"}}>
                <h2>
                Expertise That Guides Your Journey.
                </h2>
                <p className='mt-3 mb-4'>
                In the complex landscape of travel, our team stands as seasoned navigators, ready to guide you with precision. Travel is not just a job for us; it's a passion that has evolved into a deep understanding of the intricacies of the journey. With our collective expertise, your travels are in the hands of true enthusiasts who know the terrain.
                </p>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Years of Collective Travel Experience, shaping our profound understanding of diverse journeys.</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>Continuous Learning to Stay Ahead in the Industry, ensuring we bring you the latest and best.</span>
                </div>
                <div className='mb-2'>
                    <img src={list_style} alt="" width={20}/>
                    <span className='ms-3'>A Team of Passionate Travel Enthusiasts turned Experts, because expertise is born from genuine love for exploration.</span>
                </div>
            </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Wmud