import React from 'react';
import pharmacy from './images/Pngtre.png'
import nav from './images/premium-icon-NAV.png'
import s from './navbar.module.scss';
import {NavLink} from "react-router-dom";


function Navbar(props) {


    return (
        <>
            {/*<div className={s.nav}>
            <div>
                <NavLink to="/home">Home</NavLink>
            </div>
            <div>
                <NavLink to="/form">Form</NavLink>
            </div>
            <div>
                <NavLink to="/vaccinated">Vaccinated</NavLink>
            </div>
            <div>
                <NavLink to="/historyOfVaccinated">HistoryOfVac-ed</NavLink>
            </div>
        </div>*/}

            <div className="container">
                <div className="row">

                    <div className={s.bb}>
                        <nav className="navbar navbar-expand-sm">
                            <a className="navbar-brand" href="#"> <img className={s.logo}
                                                                       src={pharmacy}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">
                                            <NavLink to="/home" className={s.navLink}> Home </NavLink></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <NavLink to="/form" className={s.navLink}> Form </NavLink></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <NavLink to="/vaccinated"
                                                     className={s.navLink}> Vaccinated </NavLink></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <NavLink to="/historyOfVaccinated"
                                                     className={s.navLink}> History</NavLink></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Navbar;