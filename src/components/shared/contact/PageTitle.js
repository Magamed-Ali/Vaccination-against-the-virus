import React from 'react';
import {NavLink} from "react-router-dom";

function PageTitle(props) {
    return (
            <div className="container-fluid p-0 m-0 page-title">
                <h1>Contact Us</h1>
                <div className="page-text">
                    <ul>
                        <li><NavLink to='/'> Home </NavLink></li>
                        <li>/</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
    );
}

export default PageTitle;