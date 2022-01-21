import React from 'react';
import HeaderNav from "../../shared/header/HeaderNav";
import Topbar from "../../shared/header/Topbar";
import PicturesLine from "../../shared/pictures-line/PicturesLine";
import Footer from "../../shared/footer/Footer";
import ContainerHead from "../../shared/containerHead/ContainerHead";

function Home() {
    return (
        <div>

            <Topbar/>
            <HeaderNav/>
            <ContainerHead/>
            <PicturesLine/>
            <Footer/>
        </div>
    );
}

export default Home;