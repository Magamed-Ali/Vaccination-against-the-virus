import React from 'react';

function ContainerLine() {
    return (
        <div className="container">
            <div className="row contact-details">
                    <div className="col-lg-4 address-line address">
                        <a href="/"><i className="fas fa-map-marker-alt"></i></a>
                        <div>
                            <p>Our Address</p>
                            <p>Drive Chicago, IL 60607</p>
                        </div>
                    </div>
                    <div className="col-lg-4 address-line phone">
                        <a href="/"><i className="fas fa-phone"></i></a>
                        <div>
                            <p>Call Us</p>
                            <p>360-779-2228</p>
                        </div>
                    </div>
                    <div className="col-lg-4 address-line mail">
                        <a href="/"><i className="far fa-envelope"></i></a>
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