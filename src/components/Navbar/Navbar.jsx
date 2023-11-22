import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
// import logo from '../../assets/images/Frame_1116605564.png'
import Button from 'react-bootstrap/Button'

function Navbar1({logo, background}) {
  let textcolor;
  let variant_Btn;
  if(background){
    textcolor = "text-light";
    variant_Btn = "outline-light";
  }
  else{
    variant_Btn = "outline-dark";
  }
  return (
    <Navbar expand="lg">
        <Container className='mt-4'>
            <Navbar.Brand href='/'>
                <img src={logo} alt="travelout logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
              <Nav>
                  <Nav.Link href='/about' className={textcolor}>About Us</Nav.Link>
                  <Nav.Link href='/our_stories' className={textcolor}>Our Stories</Nav.Link>
                  <Button variant={variant_Btn} className='rounded-pill' style={{width:'100px'}}>Contact</Button>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navbar1