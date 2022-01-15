import React from 'react';
import {NavLink} from "react-router-dom";

function PageTitle(props) {
    return (
        <div className="contactUs">
            <div className="breadCrumbs">
                <h1>Contact Us</h1>
                <ul className="breadCrumbs__feedback">
                    <li><NavLink to='/'> Home </NavLink></li>
                    <li>/</li>
                    <li>Contact Us</li>
                </ul>
            </div>

        </div>
    );
}

export default PageTitle;