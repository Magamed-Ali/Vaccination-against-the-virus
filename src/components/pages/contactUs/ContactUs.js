import React from 'react';
import HeaderNav from "../../shared/header/HeaderNav";
import Topbar from "../../shared/header/Topbar";
import Footer from "../../shared/footer/Footer";
import PageTitleContact from "../../shared/pageTitleContact/PageTitleContact";
import ContactUsLine from "../../shared/container-us-lines/ContainerUsLine"
import MakeRequest from "../../shared/form/MakeRequest";

function ContactUs() {
    return (
        <div>
            <div className="container">
                <Topbar/>
                <HeaderNav/>
            </div>
            <PageTitleContact/>
            <ContactUsLine/>
            <MakeRequest/>
            <Footer/>
        </div>
    );
}

export default ContactUs;