import React from 'react';
import logo from '../../../assets/images/logo-white.png';


function HeaderNav() {
    return (
        <div className="container-fluid nav-bar-wrapper">
            <div className="container">
                <div className="nav-bar">
                    <div className="nav-bar__logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="nav-bar__menu">
                        <ul>
                            <li>Home</li>
                            <li>Form</li>
                            <li>Vaccinated</li>
                            <li>History</li>
                        </ul>
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