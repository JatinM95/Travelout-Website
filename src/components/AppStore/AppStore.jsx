import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import playstore from '../../assets/images/img_downloadbadge.svg'
// import appstore from '../../assets/images/download-on-the-app-store-apple-logo-svgrepo-com.svg'
import app1store from '../../assets/images/Download_on_the_App_Store_Badge.svg'
// download-on-the-app-store-apple-logo-svgrepo-com
// Download_on_the_App_Store_Badge
import appframe from '../../assets/images/Frame_1116605232.svg'
import './styles.css'
import EmailWaitlist from '../EmailWaitlist/EmailWaitlist'
import Popup from '../Popup/Popup'

function AppStore({color}) {
    // const [successMessage, setSuccessMessage] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const pull_data = (data) => {
        // setSuccessMessage(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
        setModalShow(true);
      }
  return (
    <>
    <Popup
    show={modalShow}
    onHide={() => setModalShow(false)} 
    />
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
                        <EmailWaitlist func={pull_data} />
                    </div>
                    {/* <p className='text-dark'>{successMessage}</p> */}
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
    </>
  )
}

export default AppStore