import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import playstore from '../../assets/images/img_downloadbadge.svg'
import appstore from '../../assets/images/download-on-the-app-store-apple-logo-svgrepo-com.svg'
import app1store from '../../assets/images/Download_on_the_App_Store_Badge.svg'
// download-on-the-app-store-apple-logo-svgrepo-com
// Download_on_the_App_Store_Badge
import appframe from '../../assets/images/Frame_1116605232.svg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'
import EmailWaitlist from '../EmailWaitlist/EmailWaitlist'

function AppStore({color}) {
  return (
    <Container fluid style={{backgroundColor:`${color}`}}>
        <Row>
            <Col sm="12" md="6" className="d-flex justify-content-center containerDiv3">
                <div className='w-75'>
                    <h1>
                        Releasing our app soon on android & iOS
                    </h1>
                    <div className='mt-4'>
                        <img src={playstore} style={{marginRight:"1rem"}} />
                        <img src={app1store}/>
                    </div>
                    <div className='bg-light mt-5 rounded-pill border join-waitlist'>
                        <EmailWaitlist />
                    </div>
                </div>
            </Col>
            <Col sm="12" md="6" className='phones3div'>
                {/* <div> */}
                    <img src={appframe} width={"80%"} className='phones3'/>
                    {/* d-block position-absolute bottom-0 */}
                {/* </div> */}
            </Col>
        </Row>
    </Container>
  )
}

export default AppStore