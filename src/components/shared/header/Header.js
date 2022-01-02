import React from 'react';
import HeaderNav from "./HeaderNav";
import Topbar from "./Topbar";
import ContainerHead from "../container/ContainerHead";

function Header() {
    return (
        <div className="header-wrapper">
            <Topbar/>
            <HeaderNav/>
            <ContainerHead/>
        </div>
    );
}

export default Header;