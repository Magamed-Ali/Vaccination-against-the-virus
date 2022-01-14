import React from 'react';
import {NavLink} from "react-router-dom";

function HeaderNav() {
    return (
        <div className="container-fluid nav-bar-wrapper">
            <div className="container">
                <div className="nav-bar">
                    <div className="nav-bar__logo">
                        <a href="/"><img src="./assets/images/logo-white.png" alt="logo"/></a>
                    </div>
                    <div className="menu-wrap menu-burger">
                        <input type="checkbox" className="toggler">
                        </input>
                        <div className="hamburger">
                            <div></div>
                        </div>
                        <div className="menu">
                            <div>
                                <div>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><NavLink to='/contact'> Contact Us </NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-bar__btn">
                        <button className="nav-bar__btn__button btn">Find A Doctor</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;