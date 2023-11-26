import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import missionimg from '../../assets/images/our_mission_div.png'
import collage from '../../assets/images/collage.jpg'
// our_team_about_us

function Mission() {
  return (
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
                Traveling is an enriching experience that exposes us to new cultures, customs, and ideas. However, it can also be daunting, especially for solo travelers. That's where our app comes in - we help travelers find a compatible travel buddy who shares their interests, values, and personality traits. This not only makes the journey more enjoyable but also helps build long-lasting relationships that transcend borders and stereotypes.
                <br />
                At our core, we believe that traveling is not just about sightseeing but also about creating deep connections with people.
                <br />
                <br />
                The motivation behind our startup is deeply rooted in the understanding that people fear what they don't know. This fear often leads to discrimination. We aspire to counteract this tendency by facilitating connections worldwide. Our mission is to enable travelers to share their stories, break down stereotypes, and bridge the gap between different cultures. Through the universal language of travel, we aim to unite people, creating a global community bound by shared experiences and understanding. Together, let's make the world a better, friendlier place.
                </p>
            </Col>
        </Row>
        <Row>
            <img src={collage} alt="collage" />
        </Row>
        {/* <Row>
            <img src={wmud} alt="what makes us different" />
        </Row> */}
    </Container>
  )
}

export default Mission