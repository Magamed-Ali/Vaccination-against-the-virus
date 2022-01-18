import React from 'react';
import {NavLink} from "react-router-dom";


function HeaderNav() {
    return (

        <div className="container-fluid navbar-wrapper">
            <div className="container navbar-wrapper__navigation">
                <div className="navigation-logo">
                    <NavLink to="/"><img src="./assets/images/logo-white.png" alt="logo"/></NavLink></div>
                <div className="menu-wrap menu-burger">
                    <input type="checkbox" className="toggler">
                    </input>
                    <div className="hamburger">
                        <div></div>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><a href="#">FAQ</a></li>
                            <li><NavLink to='/contact'> Contact Us </NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navigation-btn">
                    <button className="btn">Find A Doctor</button>
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;