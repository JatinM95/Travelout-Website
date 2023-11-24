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
                    <p role='button' style={dark===1?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(1)}> <span className='border border-dark rounded-circle me-3'>01</span>Transperance</p>
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
                    <p role='button' style={dark===2?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(2)}> <span className='border border-dark rounded-circle me-3'>02</span>Communication</p>
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
                    <p role='button' style={dark===3?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(3)}> <span className='border border-dark rounded-circle me-3'>03</span>People first</p>
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
                    <p role='button' style={dark===4?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(4)}> <span className='border border-dark rounded-circle me-3'>04</span>Customer is king</p>
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
                    <p role='button' style={dark===5?{color:"black"}:{color:"lightgrey"}} onClick={()=>setDark(5)}> <span className='border border-dark rounded-circle me-3'>05</span>Expertise</p>
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
                    When we're doing things we don't want to do, we're not doing our best.
                    So our goal is to stick to the stuff we're passionate about. No taking
                    on work that doesn't thrill us.
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
                    We believe in communicating things to keep you updated.
                </h2>
                <p className='mt-3 mb-4'>
                    When we're doing things we don't want to do, we're not doing our best.
                    So our goal is to stick to the stuff we're passionate about. No taking
                    on work that doesn't thrill us.
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
                    We believe in keeping people first.
                </h2>
                <p className='mt-3 mb-4'>
                    When we're doing things we don't want to do, we're not doing our best.
                    So our goal is to stick to the stuff we're passionate about. No taking
                    on work that doesn't thrill us.
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
            <Row style={dark===4?{display:"block"}:{display:"none"}}>
                <h2>
                    For us Customer is king, customer is our priority.
                </h2>
                <p className='mt-3 mb-4'>
                    When we're doing things we don't want to do, we're not doing our best.
                    So our goal is to stick to the stuff we're passionate about. No taking
                    on work that doesn't thrill us.
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
            <Row style={dark===5?{display:"block"}:{display:"none"}}>
                <h2>
                    We believe in expertise, expertise to get the work done.
                </h2>
                <p className='mt-3 mb-4'>
                    When we're doing things we don't want to do, we're not doing our best.
                    So our goal is to stick to the stuff we're passionate about. No taking
                    on work that doesn't thrill us.
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
            </Col>
        </Row>
    </Container>
  )
}

export default Wmud