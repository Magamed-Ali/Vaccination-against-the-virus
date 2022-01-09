import React from 'react';
import HeaderNav from "../header/HeaderNav";
import Topbar from "../header/Topbar";
import Footer from "../footer/Footer";
import ContactBloc from "./ContactBloc";

function Contact() {
    return (
        <div>
            <Topbar/>
            <HeaderNav/>
            <ContactBloc/>
            <Footer/>
        </div>
    );
}

export default Contact;