import React from 'react';
import HeaderNav from "../../shared/header/HeaderNav";
import Topbar from "../../shared/header/Topbar";
import Footer from "../../shared/footer/Footer";
import PageTitle from "../../shared/contact/PageTitle";

function Contact() {
    return (
        <div>
            <Topbar/>
            <HeaderNav/>
            <PageTitle/>
            <Footer/>
        </div>
    );
}

export default Contact;