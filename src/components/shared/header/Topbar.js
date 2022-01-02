import React from 'react';

function TopBar() {
    return (
            <div className="container-fluid p-0 top-bar-wrapper">
                <div className="container">
                    <div className="top-bar">
                        <div className="top-bar__info">
                           <div className="top-bar__mail">
                               <i className="far fa-envelope"></i>
                               <span>info@website.com</span>
                           </div>
                            <div className="top-bar__address">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Oakwood, Los Angeles, CA 1098</span>
                            </div>
                        </div>
                        <div className="top-bar__social-links">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-product-hunt"></i>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default TopBar;