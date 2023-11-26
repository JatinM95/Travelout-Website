import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutusface from '../../components/Aboutusface/Aboutusface';
// components/Aboutusface/Aboutusface
import Mission from '../../components/Mission/Mission';
import AppStore from '../../components/AppStore/AppStore';
import Footer from '../../components/Footer/Footer';
import videoimg from '../../assets/images/about_us_video_img.svg'
import Wmud from '../../components/Wmud/Wmud'
import JoinOurTeam from '../../components/JoinOurTeam/JoinOurTeam'

function AboutUs() {
  return (
    <>
    <Aboutusface />
    <Mission />
    <Wmud />
    <img src={videoimg} width={"100%"} alt="video image"/>
    <JoinOurTeam />
    <AppStore color="#EDF4FC"/>
    <Footer />
    </>
  )
}

export default AboutUs