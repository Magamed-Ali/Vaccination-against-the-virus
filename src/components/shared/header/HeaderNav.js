import React from 'react';
import {NavLink} from "react-router-dom";

function HeaderNav() {
    return (
        <div className="container-fluid nav-bar-wrapper">
            <div className="container">
                <div className="nav-bar">
                    <div className="nav-bar__logo">
                        <NavLink to="/"><img src="./assets/images/logo-white.png" alt="logo"/></NavLink>
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
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><NavLink to='/contact'> Contact Us </NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-bar__btn">
                        <button className="btn-primary btn">Find A Doctor</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;