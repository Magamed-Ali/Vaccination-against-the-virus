import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'

function ContainerLine() {
    return (
        <div className="container">
            <div className="row contact-details">
                <div className="col-lg-4 address-line address">
                    <a href="/"><FontAwesomeIcon icon={faMapMarkerAlt}/></a>
                    <div>
                        <p>Our Address</p>
                        <p>Drive Chicago, IL 60607</p>
                    </div>
                </div>
                <div className="col-lg-4 address-line phone">
                    <a href="/"><FontAwesomeIcon icon={faPhoneAlt}/></a>
                    <div>
                        <p>Call Us</p>
                        <p>360-779-2228</p>
                    </div>
                </div>
                <div className="col-lg-4 address-line mail">
                    <a href="/"><FontAwesomeIcon icon={faEnvelope}/></a>
                    <div>
                        <p>Our Mail</p>
                        <p>yourname@mail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerLine;