import React from 'react'
import Navbar1 from "../../components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../../components/Slider/Slider";
import StandoutF from "../../components/StandoutF/StandoutF";
import DirectionsForApp from "../../components/DirectionsForApp/DirectionsForApp";
import Faqs from "../../components/Faqs/Faqs";
import Reviews from "../../components/Reviews/Reviews";
import AppStore from "../../components/AppStore/AppStore";
import Footer from "../../components/Footer/Footer";
import logo from '../../assets/images/Frame_1116605564.png'

function Home() {
  return (
    <>
    <Navbar1 logo={logo}/>
    <Slider />
    <StandoutF />
    <DirectionsForApp />
    <Faqs />
    <Reviews />
    <AppStore />
    <Footer />
    </>
  )
}

export default Home