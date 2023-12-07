import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/images/Frame_1116605564.png';
import AppStore from '../../components/AppStore/AppStore';
import PolicyDoc from '../../components/PolicyDoc/PolicyDoc';

function PrivacyPolicy() {
  return (
    <>
    <Navbar1 logo={logo} />
    <PolicyDoc />
    <AppStore color="#EDF4FC" />
    <Footer />
    </>
  )
}

export default PrivacyPolicy