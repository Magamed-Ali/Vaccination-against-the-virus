import React from 'react';
import {NavLink} from "react-router-dom";

function PageTitle(props) {
    return (
            <div className="contact-us">
                <div className="contact-us__place-in-us">
                    <h1>Contact Us</h1>
                    <div className="page-text">
                        <ul>
                            <li><NavLink to='/'> Home </NavLink></li>
                            <li>/</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

            </div>
    );
}

export default PageTitle;