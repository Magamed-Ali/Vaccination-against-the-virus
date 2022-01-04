import React from 'react';
import HeaderNav from "./HeaderNav";
import Topbar from "./Topbar";
import ContainerHead from "../container/ContainerHead";
import PicturesLine from "../pictures-line/PicturesLine";
import Footer from "../footer/Footer";

function Header() {
    return (
        <div className="header-wrapper">
            <Topbar/>
            <HeaderNav/>
            <ContainerHead/>
            <PicturesLine/>
            <Footer/>
        </div>
    );
}

export default Header;