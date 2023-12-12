import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/images/Frame_1116605564.png';
import AppStore from '../../components/AppStore/AppStore';
import { Col, Container, Row } from 'react-bootstrap';
import ninethStory from '../../assets/images/img_rectangle8632_7.png';

function SustainableSojourns() {
    return (
        <>
            <Navbar1 logo={logo} />
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col md="12">
                        <h1>
                            Sustainable Sojourns: A Green Guide to Responsible Travel
                        </h1>
                        <p className='text-justify'>
                            Published: 07.11.2023 | 3 min read
                        </p>
                    </Col>
                    <Col md="12" className='mt-4 mb-4'>
                        <img src={ninethStory} alt="image" width={"100%"} />
                    </Col>
                    <Col md="12">
                        <p className='text-justify'>
                            Set forth on a transformative journey where every footfall is not just a step on foreign soil but a conscious decision to leave a positive mark on the world. This blog is a heartfelt exploration of a decade committed to responsible travel—a guide to sustainable sojourns that go beyond the surface of picturesque landscapes to delve into the very heart of ethical exploration.
                        </p>
                        <p className='text-justify'>
                            In the realm of sustainable travel, this blog is more than a directory of eco-friendly accommodations and community-driven initiatives; it's an emotional testament to the belief that every journey can be a force for good. From choosing accommodations with low environmental impact to participating in local conservation efforts, this blog invites you to become a steward of the planet.
                        </p>
                        <p className='text-justify'>
                            Through the lens of this blog, witness the emotional impact of responsible travel—whether it's the joy of contributing to a community project or the fulfillment found in treading lightly on the Earth. It's not just about exploring destinations; it's about creating a symbiotic relationship between traveler and place, where every experience is a shared moment of growth and sustainability.
                        </p>
                        <p className='text-justify'>
                            Dear eco-travelers, let this blog be your green guide to a world where exploration is not just about discovery but about creating a positive impact. From immersing in the local culture to supporting wildlife conservation initiatives, may every responsible choice be a step towards a more sustainable and emotionally fulfilling way of traversing the globe.
                        </p>
                        <p className='text-justify'>
                            As we navigate this green guide, may the joy of responsible travel be an emotional undercurrent, reminding us that the beauty of the world is not just to be witnessed but also safeguarded for generations to come.
                        </p>
                    </Col>
                </Row>
            </Container>
            <AppStore color="#EDF4FC" />
            <Footer />
        </>
    )
}

export default SustainableSojourns