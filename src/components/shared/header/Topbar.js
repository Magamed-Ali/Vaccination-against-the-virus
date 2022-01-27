import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faPinterest, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function TopBar(props) {

    return (
        <div className="container-fluid p-0 top-bar-wrapper">
            <div className="container">
                <div className="top-bar">
                    <div className="top-bar__info">
                        <div className="top-bar__mail">
                            <a href="https://mail.ru/" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                            <span>info@website.com</span>
                        </div>
                        <div className="top-bar__address">
                            <a href="https://yandex.ru/maps/213/moscow/?ll=37.622504%2C55.753215&z=10" target="_blank">
                                <FontAwesomeIcon icon={faSearchLocation}/></a>
                            <span>Oakwood, Los Angeles, CA 1098</span>
                        </div>
                    </div>
                    <div className="top-bar__social-links">
                        <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="https://www.pinterest.es/freepik/" target="_blank"><FontAwesomeIcon icon={faPinterest}/></a>
                        <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;