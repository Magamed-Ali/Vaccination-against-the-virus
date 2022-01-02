import React from 'react';
import HeaderNav from "./HeaderNav";
import Topbar from "./Topbar";

function Header() {
    return (
        <div className="header-wrapper">
            <Topbar/>
            <HeaderNav/>
        </div>
    );
}

export default Header;