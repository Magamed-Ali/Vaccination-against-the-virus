import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStethoscope, faUserNurse, faHeartbeat, faNotesMedical, faArrowRight} from '@fortawesome/free-solid-svg-icons'


function ContainerSection() {
    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 aside">
                        <div className="aside__block">
                            <div className="aside__block-icon"><FontAwesomeIcon icon={faStethoscope}/></div>
                            <h5><a href="/">Therapy</a></h5>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit,
                                sed do eiusmod Lorem ipsum dolor sit.</p>
                            <div className="aside__block-link"><span><FontAwesomeIcon icon={faArrowRight}/></span></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 aside">
                        <div className="aside__block">
                            <div className="aside__block-icon"><FontAwesomeIcon icon={faUserNurse}/></div>
                            <h5><a href="/">Dentistry</a></h5>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit,
                                sed do eiusmod Lorem ipsum dolor sit.</p>
                            <div className="aside__block-link"><span><FontAwesomeIcon icon={faArrowRight}/></span></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 aside">
                        <div className="aside__block">
                            <div className="aside__block-icon"><FontAwesomeIcon icon={faHeartbeat}/></div>
                            <h5><a href="/">Virusology</a></h5>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit,
                                sed do eiusmod Lorem ipsum dolor sit.</p>
                            <div className="aside__block-link"><span><FontAwesomeIcon icon={faArrowRight}/></span></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 aside">
                        <div className="aside__block">
                            <div className="aside__block-icon"><FontAwesomeIcon icon={faNotesMedical}/></div>
                            <h5><a href="/">Pharmacology</a></h5>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit,
                                sed do eiusmod Lorem ipsum dolor sit.</p>
                            <div className="aside__block-link"><span><FontAwesomeIcon icon={faArrowRight}/></span></div>
                        </div>
                    </div>
                </div>
                <div/>
            </div>
        </div>
            );
            }

            export default ContainerSection;