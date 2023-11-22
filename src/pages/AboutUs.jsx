import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutusface from '../components/Aboutusface/Aboutusface';
import Mission from '../components/Mission/Mission';
import AppStore from '../components/AppStore/AppStore';
import Footer from '../components/Footer/Footer';

function AboutUs() {
  return (
    <>
    <Aboutusface />
    <Mission />
    <AppStore color="#EDF4FC"/>
    <Footer />
    </>
  )
}

export default AboutUs