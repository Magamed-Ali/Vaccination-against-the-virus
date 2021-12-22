import React from 'react';
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <div className={s.nav}>
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
        </div>
    );
}

export default Navbar;