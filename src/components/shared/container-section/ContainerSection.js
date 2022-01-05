import React from 'react';

function ContainerSection() {
    return (
        <div className="container section">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 aside">
                    <div className="aside__block">
                        <div className="icon"><i className="fas fa-stethoscope"></i></div>
                        <a href="">Therapy</a>
                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit,
                            sed do eiusmod Lorem ipsum dolor sit.</p>
                        <div className="link"><a href=""><i className="fas fa-arrow-right"></i></a></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 aside">
                    <div className="aside__block">
                        <div className="icon"><i className="fas fa-user-nurse"></i></div>
                        <a href="">Dentistry</a>
                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit,
                            sed do eiusmod Lorem ipsum dolor sit.</p>
                        <div className="link"><a href=""><i className="fas fa-arrow-right"></i></a></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 aside">
                    <div className="aside__block">
                        <div className="icon"><i className="fas fa-heartbeat"></i></div>
                        <a href="">Virusology</a>
                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit,
                            sed do eiusmod Lorem ipsum dolor sit.</p>
                        <div className="link"><a href=""><i className="fas fa-arrow-right"></i></a></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 aside">
                    <div className="aside__block">
                        <div className="icon"><i className="fas fa-notes-medical"></i></div>
                        <a href="">Pharmacology</a>
                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit,
                            sed do eiusmod Lorem ipsum dolor sit.</p>
                        <div className="link"><a href=""><i className="fas fa-arrow-right"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerSection;