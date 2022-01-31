import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import server from "json-server/lib/server/router/nested";

function ContainerLine() {

    /*server.get('/line', (req, res) => {
        const line = router.db.get('line')
        res.json(line)
    })


*/
    return (
        <div className="container">
            <div className="row contact-details">
                <div className="col-lg-4 contact-details__address-line">
                    <NavLink to="/"><FontAwesomeIcon icon={faMapMarkerAlt}/></NavLink>
                    <div>
                        <p>Our Address</p>
                        <p>Drive Chicago, IL 60607</p>
                    </div>
                </div>
                {/*<div className="col-lg-4 contact-details__address-line">
                    <NavLink to="/"><FontAwesomeIcon icon={faMapMarkerAlt}/></NavLink>
                    <div>
                        <p>Our Address</p>
                        <p>Drive Chicago, IL 60607</p>
                    </div>
                </div>
                <div className="col-lg-4 contact-details__address-line">
                    <NavLink to="/"><FontAwesomeIcon icon={faPhoneAlt}/></NavLink>
                    <div>
                        <p>Call Us</p>
                        <p>360-779-2228</p>
                    </div>
                </div>
                <div className="col-lg-4 contact-details__address-line">
                    <NavLink to="/"><FontAwesomeIcon icon={faEnvelope}/></NavLink>
                    <div>
                        <p>Our Mail</p>
                        <p>yourname@mail.com</p>
                    </div>
                </div>*/}
            </div>
        </div>
    );
}

export default ContainerLine;