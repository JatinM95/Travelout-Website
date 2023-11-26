import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../../components/Navbar/Navbar'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/images/Frame_1116605564.png'
// assets/images/Frame_1116605564.png
import AppStore from '../../components/AppStore/AppStore'

function Contact() {
  return (
    <>
    <Navbar1 logo={logo}/>
    <ContactUs />
    <AppStore color="#EDF4FC"/>
    <Footer />
    </>
  )
}

export default Contact