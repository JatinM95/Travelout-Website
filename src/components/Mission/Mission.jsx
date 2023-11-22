import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import missionimg from '../../assets/images/our_mission_div.png'
import collage from '../../assets/images/about_img_div.svg'
import wmud from '../../assets/images/what_makes_us_different.svg'
import videoimg from '../../assets/images/about_us_video_img.svg'
import joinOurTeam from '../../assets/images/our_team_about_us.svg'
// our_team_about_us

function Mission() {
  return (
    <>
    <Container>
        <Row className='mt-5 mb-5'>
            <Col sm="6">
                <div className='w-75'>
                <img src={missionimg}/>
                <h1 className='mt-4'>
                    Our value-driven approach to product is unique.
                </h1>
                </div>
            </Col>
            <Col sm="6" >
                <p>
                Life&#39;s a beach, so we&#39;ll keep this short and sweet. We&#39;re a
                tight-knit group of excitable individuals, with a passion for
                all things social. Whether you&#39;re fishing for creative
                campaign.
                <br />
                We are a group of people who think digitally and take daily
                showers of light in sunny Portugal. We started out in Coimbra,
                but we have clients all around the world.
                <br />
                <br />
                Duffel is focused on democratising the travel industry through
                the use of easy-to-use APIs. We&#39;re building infrastructure
                that underpins the travel industry in an effort to make it
                accessible for anyone who wishes to sell travel.
                </p>
            </Col>
        </Row>
        <Row>
            <img src={collage} alt="collage" />
        </Row>
        <Row>
            <img src={wmud} alt="what makes us different" />
        </Row>
    </Container>
    <img src={videoimg} width={"100%"} alt="video image" className='mt-5'/>
    <Container className='mb-5'>
        <Row>
            <img src={joinOurTeam} alt="join our team" />
        </Row>
    </Container>
    </>
  )
}

export default Mission