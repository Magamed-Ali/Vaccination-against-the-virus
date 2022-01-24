import React from 'react';
import HeaderNav from "../../shared/header/HeaderNav";
import Topbar from "../../shared/header/Topbar";
import Footer from "../../shared/footer/Footer";
import PageTitle from "../../shared/contactUs/PageTitle";
import ContactUsLine from "../../shared/container-us-lines/ContainerUsLine"
import MakeRequest from "../../shared/form/MakeRequest";
import ScrollToTop from "../../shared/scrollToTop/ScrollToTop";

function ContactUs() {
    return (
        <div>
            <div className="container">
                <Topbar/>
                <HeaderNav/>
            </div>
            <PageTitle/>
            <ContactUsLine/>
            <MakeRequest/>
            <Footer/>
        </div>
    );
}

export default ContactUs;