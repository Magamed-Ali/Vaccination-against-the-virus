import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faPinterest, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function TopBar() {
    return (
        <div className="container-fluid p-0 top-bar-wrapper">
            <div className="container">
                <div className="top-bar">
                    <div className="top-bar__info">
                        <div className="top-bar__mail">
                            <a href=""><FontAwesomeIcon icon={faEnvelope}/></a>
                            <span>info@website.com</span>
                        </div>
                        <div className="top-bar__address">
                            <a href=""><FontAwesomeIcon icon={faSearchLocation}/></a>
                            <span>Oakwood, Los Angeles, CA 1098</span>
                        </div>
                    </div>
                    <div className="top-bar__social-links">
                        <a href=""><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href=""><FontAwesomeIcon icon={faPinterest}/></a>
                        <a href=""><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;