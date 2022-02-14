import React from 'react';
import Topbar from "../../shared/header/Topbar";
import HeaderNav from "../../shared/header/HeaderNav";
import PageTitleContact from "../../shared/page-title-contact/PageTitleContact";
import ContactUsLine from "../../shared/container-us-lines/ContainerUsLine";
import ContactForm from "../../shared/contact-form/ContactForm";
import GoogleMaps from "../../shared/google-maps/GoogleMaps";
import Footer from "../../shared/footer/Footer";
import SearchModal from "../../shared/search-modal/SearchModal";

function Doctors(props) {
    return (
        <div>
            <div className="container">
                <Topbar navigationStatus={props.navigationStatus}/>
                <HeaderNav handleClick={props.handleClick}
                           navigationStatus={props.navigationStatus}/>
            </div>
            <PageTitleContact/>
            <ContactUsLine/>
            <ContactForm/>
            <GoogleMaps/>
            <Footer/>
            <SearchModal isOpened={props.isOpened} handleClick={props.handleClick}/>
        </div>
    );
}

export default Doctors;