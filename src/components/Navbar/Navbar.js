import React from 'react';
import pharmacy from '../../assets/images/Pngtre.png';
import style from '../../styles/main.module.scss';
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

            <div className="container-fluid">
                <div className="row">
                    <div className={style.main_box}>
                        <nav className="navbar navbar-expand-sm">
                            <a className="navbar-brand" href="#"> <img className={style.logo}
                                                                       src={pharmacy}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    style={{color: "#333", border: "1px solid #333"}}
                            >
                                <span className="navbar-toggler-icon"><span className={style.menu}>&equiv;</span></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to="/home" className={style.navLink}> Home </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/form" className={style.navLink}> Form </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/vaccinated"
                                                 className={style.navLink}> Vaccinated </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/historyOfVaccinated"
                                                 className={style.navLink}> History</NavLink>
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