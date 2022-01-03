import React from 'react';
import logo from '../../../assets/images/logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__datta-address"></div>
            <div className="container breakpoints footer__datta-address__content">
                <div className="row">
                    <div className="col-lg-4  footer__datta-address__content__logo">
                        <div className="logo-img"><img src={logo} alt=""/></div>
                        <p>It is a long established fact that a
                            <br/>
                            reader will be distracted by the
                            <br/>
                            readable.</p>
                        <div className="logo">
                            <i className="fab fa-2x fa-facebook-f logo_i"></i>
                            <i className="fab fa-2x fa-twitter"></i>
                            <i className="fab fa-2x fa-instagram-square"></i>
                            <i className="fab fa-2x fa-linkedin-in"></i>
                            <i className="fab fa-2x fa-google"></i>
                        </div>
                    </div>

                    <div className="col-md-3  footer__datta-address__content__ul">
                        <ul>
                            <h6>Services</h6>
                            <li>Conditions</li>
                            <li>Term of Use</li>
                            <li>Our Services</li>
                            <li>New Guests Lists</li>
                            <li>The Team List</li>
                        </ul>
                    </div>
                    <div className="col-md-2  footer__datta-address__content__ul">
                        <ul>
                            <h6>Useful Links</h6>
                            <li>Conditions</li>
                            <li>Term of Use</li>
                            <li>Our Services</li>
                            <li>New Guests Lists</li>
                            <li>The Team List</li>
                        </ul>
                    </div>
                    <div className="col-lg-3  footer__datta-address__content__ul">

                        <h6>Subscribe</h6>
                        <p>Get The Latest Updates via email.
                            <br/>
                            Any time you may unsubscribe</p>
                        <i className="fas fa-phone"><span>8 800 888 88 88</span></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;