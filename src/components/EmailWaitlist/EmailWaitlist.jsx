import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './styleEmail.css';
import axios from "axios";
import { useForm } from "react-hook-form";

function EmailWaitlist(props) {
  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [email, setEmail] = useState("");

  function onSubmit(data) {
    if(email===""){
      return;
    }
    axios
      .post("https://eomfi00i6qv9scg.m.pipedream.net", data)
      .then((response) => {
        props.func("Thank you for joining the waitlist 😊");
        setEmail("");
        // document.getElementById("mailid").value = "";
      })
      .catch((e) => console.error(e));
      
      // document.getElementById("mailid").value = "";
  } 

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
          <Col xs="7" lg="7" className='pr-2 my-auto' controlId="validationCustom01">
            <input {...register("email")} className='bg-light slide-input text-dark' size="30" type='email' placeholder='Enter your email ID' id="mailid" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </Col>
          <Col xs="5" lg="5" controlId="validationCustom02">
            <Button type='submit' className='w-100 text-light first-slide-button'>{isSubmitting ? "Joining" : "Join the waitlist"}</Button>
          </Col>
          {/* {successMessage && <p>{successMessage}</p>} */}
      </Row>
    </Form>
  )
}

export default EmailWaitlist