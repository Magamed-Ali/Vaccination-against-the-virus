import React from 'react';
import HeaderNav from "../../shared/header/HeaderNav";
import Topbar from "../../shared/header/Topbar";
import Footer from "../../shared/footer/Footer";
import PageTitleContact from "../../shared/pageTitleContact/PageTitleContact";
import ContactUsLine from "../../shared/container-us-lines/ContainerUsLine"
import MakeRequest from "../../shared/form/MakeRequest";
import SearchModal from "../../shared/search-modal/SearchModal";
import CardGoogle from "../../shared/card-google/CardGoogle";

function ContactUs(props) {
    return (
        <div>
            <div className="container">
                <Topbar/>
                <HeaderNav handleClick={props.handleClick}/>
            </div>
            <PageTitleContact/>
            <ContactUsLine/>
            <MakeRequest/>
            <CardGoogle/>
            <Footer/>
            <SearchModal isOpened={props.isOpened} handleClick={props.handleClick}/>
        </div>
    );
}

export default ContactUs;