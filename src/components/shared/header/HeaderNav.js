import React from 'react';
import {NavLink} from "react-router-dom";

function HeaderNav() {
    return (
        <div className="container-fluid navbarWrapper">
            <div className="container">
                <div className="navbarWrapper__navigation">
                    <div className="navigationLogo">
                        <NavLink to="/"><img src="./assets/images/logo-white.png" alt="logo"/></NavLink>
                    </div>
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
                    <div className="navigationBtn">
                        <button className="btn">Find A Doctor</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;