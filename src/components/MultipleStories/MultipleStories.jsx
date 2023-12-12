import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import firstStory from "../../assets/images/img_rectangle8632.png";
import secondStory from "../../assets/images/img_rectangle8632_243x363.png";
import thirdStory from "../../assets/images/img_rectangle8632_1.png";
import fourthStory from '../../assets/images/img_rectangle8632_2.png';
import fifthStory from '../../assets/images/img_rectangle8632_3.png';
import sixthStory from '../../assets/images/img_rectangle8632_4.png';
import seventhStory from '../../assets/images/img_rectangle8632_5.png';
import eighthStory from '../../assets/images/img_rectangle8632_6.png';
import ninethStory from '../../assets/images/img_rectangle8632_7.png';
import { Link } from 'react-router-dom';
import './multiplestories.css';

function MultipleStories() {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col md="4" className='p-3'>
                    <Link to="/wanderlust_diaries">
                        <img src={firstStory} width={"100%"} alt="first_story" />
                    </Link>
                    <h5 className='mt-3'>Wanderlust Diaries: Discovering the Soul of Solo Travel</h5>
                    <p>Published: 15.11.2023 | 3 min read</p>
                </Col>
                <Col md="4" className='p-3'>
                    <Link to="/beyond_borders">
                        <img src={secondStory} width={"100%"} alt="second_story" />
                    </Link>
                    <h5 className='mt-3'>Beyond Borders: A Love Letter to Spontaneous Getaways</h5>
                    <p>Published: 02.11.2023 | 3 min read</p>
                </Col>
                <Col md="4" className='p-3'>
                    <Link to="/culinary_crossroads">
                        <img src={thirdStory} width={"100%"} alt="third_story" />
                    </Link>
                    <h5 className='mt-3'>Culinary Crossroads: Tasting the World, One Bite at a Time</h5>
                    <p>Published: 05.11.2023 | 3 min read</p>
                </Col>
            </Row>
            <Row>
                <Col md="4" className='p-3'>
                    <Link to="/sacred_sunsets">
                        <img src={fourthStory} width={"100%"} alt="fourth_story" />
                    </Link>
                    <h5 className='mt-3'>Sacred Sunsets: Chasing Horizon Dreams Around the Globe</h5>
                    <p>Published: 13.11.2023 | 3 min read</p>
                </Col>
                <Col md="4" className='p-3'>
                    <Link to="/thrill_seeker">
                        <img src={fifthStory} width={"100%"} alt="fifth_story" />
                    </Link>
                    <h5 className='mt-3'>Thrill Seeker's Paradise: Conquering Adventure Capitals</h5>
                    <p>Published: 05.11.2023 | 3 min read</p>
                </Col>
                <Col md="4" className='p-3'>
                    <Link to="/cultural_kaleidoscope">
                        <img src={sixthStory} width={"100%"} alt="sixth_story" />
                    </Link>
                    <h5 className='mt-3'>Cultural Kaleidoscope: Immersive Experiences Around the Globe</h5>
                    <p>Published: 10.11.2023 | 3 min read</p>
                </Col>
            </Row>
            <Row>
                <Col md="4" className='p-3'>
                    <Link to="/tech_travel">
                        <img src={seventhStory} width={"100%"} alt="seventh_story" />
                    </Link>
                    <h5 className='mt-3'>Tech Travel: Navigating the World in the Digital Age</h5>
                    <p>Published: 11.11.2023 | 3 min read</p>
                </Col>
                <Col md="4" className='p-3'>
                    <Link to="/luxury_escapes">
                        <img src={eighthStory} width={"100%"} alt="eighth_story" />
                    </Link>
                    <h5 className='mt-3'>Luxury Escapes: Indulging in Opulent Adventures</h5>
                    <p>Published: 01.11.2023 | 3 min read</p>
                </Col>
                <Col md="4" className='p-3'>
                    <Link to="/sustainable_sojourns">
                    <img src={ninethStory} width={"100%"} alt="nineth_story" />
                    </Link>
                    <h5 className='mt-3'>Sustainable Sojourns: A Green Guide to Responsible Travel</h5>
                    <p>Published: 07.11.2023 | 3 min read</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MultipleStories