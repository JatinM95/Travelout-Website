import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutusface from "../../components/Aboutusface/Aboutusface";
import MultipleStories from "../../components/MultipleStories/MultipleStories";
import AppStore from '../../components/AppStore/AppStore';
import Footer from '../../components/Footer/Footer';

function OurStories(){
    return(
        <>
        <Aboutusface title="OUR STORIES" head1="Our Stories inspiring all the" head2="travellers"/>
        <MultipleStories />
        <AppStore color="#EDF4FC" />
        <Footer />
        </>
    );
}

export default OurStories