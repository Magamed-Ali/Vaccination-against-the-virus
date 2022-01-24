import React from 'react';
import HeaderNav from "../../shared/header/HeaderNav";
import Topbar from "../../shared/header/Topbar";
import PicturesLine from "../../shared/pictures-line/PicturesLine";
import Footer from "../../shared/footer/Footer";
import ContainerHead from "../../shared/containerHead/ContainerHead";
import ScrollToTop from "../../shared/scrollToTop/ScrollToTop";

function Home() {
    return (
        <div>
            <Topbar/>
            <HeaderNav/>
            <ContainerHead/>
            <PicturesLine/>
            <Footer/>
            <ScrollToTop/>
        </div>
    );
}

export default Home;