import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function EmailWaitlist() {
  return (
    <Row>
        <Col xs="7" lg="7" className='pr-2'>
            <Form.Control className='bg-light slide-input' type='email' placeholder='Enter your email ID' />
        </Col>
        <Col xs="5" lg="5" className='pl-2'>
            <Button className='w-100 btn-info text-light first-slide-button'>Join the waitlist</Button>
        </Col>
    </Row>
  )
}

export default EmailWaitlist