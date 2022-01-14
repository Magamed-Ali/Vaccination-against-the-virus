import React from 'react';
import ContainerLines from '../container-lines/ContainerLine'
import FooterFloor from "./FooterFloor";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faPinterest, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="contact-lines"><ContainerLines/></div>
            <div className="container footer__content">
                <div className="row g-5 justify-content-md-start">
                    <div className="col-md-12 col-xl-4 content-logo">
                        <div className="logo-img"><a href="/"><img src="./assets/images/logo.png" alt=""/></a></div>
                        <p>It is a long established fact that a
                            <br/>
                            reader will be distracted by the
                            <br/>
                            readable.</p>
                        <div className="link-social-media">
                            <a href="https://www.facebook.com/" target="_blank">
                                <FontAwesomeIcon icon={faFacebook}/></a>
                            <a href="https://twitter.com/" target="_blank">
                                <FontAwesomeIcon icon={faTwitter}/></a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://ru-ru.facebook.com/" target="_blank">
                                <FontAwesomeIcon icon={faPinterest}/></a>
                            <a href="https://www.google.ru/" target="_blank">
                                <FontAwesomeIcon icon={faGoogle}/></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-3 content-services">
                        <ul>
                            <h6>Services</h6>
                            <li><a href="/">Conditions</a></li>
                            <li><a href="/">Term of Use</a></li>
                            <li><a href="/">Our Services</a></li>
                            <li><a href="/">New Guests Lists</a></li>
                            <li><a href="/">The Team List</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-xl-2 content-services">
                        <ul>
                            <h6>Useful Links</h6>
                            <li><a href="/">Conditions</a></li>
                            <li><a href="/">Term of Use</a></li>
                            <li><a href="/">Our Services</a></li>
                            <li><a href="/">New Guests Lists</a></li>
                            <li><a href="/">The Team List</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-xl-3 content-services">
                        <h6>Subscribe</h6>
                        <p>Get The Latest Updates via email.
                            <br/>
                            Any time you may unsubscribe</p>
                        <a href=""><FontAwesomeIcon icon={faPhoneAlt}/><span>360-779-2228</span></a>
                    </div>
                </div>
                <div><FooterFloor/></div>
            </div>
        </div>
    );
}

export default Footer;