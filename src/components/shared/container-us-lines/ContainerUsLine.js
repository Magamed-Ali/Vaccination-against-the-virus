import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHospitalAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';


function ContainerUsLine(props) {
    return (
        <div className="feedback">
            <div className="container feedback-loop">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 feedback-loop__case">
                        <div className="info">
                            <div className="info__icon"><FontAwesomeIcon icon={faHospitalAlt}/></div><div>
                            <h5>Our Address</h5>
                            <p>PSD Building, 2 Tower St,<br/> United States.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 feedback-loop__case">
                        <div className="info">
                            <div className="info__icon"><FontAwesomeIcon icon={faPhoneAlt}/></div>
                            <div>
                                <h5>Our Phone</h5>
                                <p>Telephone: 00291291023<br/>Mobile: 000 2324 39493</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 feedback-loop__case">
                        <div className="info">
                            <div className="info__icon"><FontAwesomeIcon icon={faEnvelope}/></div>
                            <div>
                                <h5>Our Email</h5>
                                <p>Email: doc@email.com<br/>Inquiries: info@orex.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContainerUsLine;