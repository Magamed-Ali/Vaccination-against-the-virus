import React from 'react';
import logo from '../../../assets/images/logo-white.png';
import styles from '../../../styles/style.scss';

function HeaderNav() {
    return (
        <div className="headerNav">
            <div className="container-fluid p-0 text-center ">
                    <div className="row align-items-center">
                        <div className="col-3"><img src={logo} alt=""/></div>
                        <div className="col">
                            <div className="container-fluid">
                                <div className="row">
                                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                        <div className="container-fluid">
                                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                                    aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navbarNav">
                                               <div className="container-fluid">
                                                   <ul className="navbar-nav">
                                                       <li className="nav-item">
                                                           Home
                                                       </li>
                                                       <li className="nav-item">
                                                           Features
                                                       </li>
                                                       <li className="nav-item">
                                                           Pricing
                                                       </li>
                                                       <li className="nav-item">
                                                           Disabled
                                                       </li>
                                                   </ul>

                                               </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <button>
                                asdfas
                            </button>
                        </div>
                    </div>
            </div>

        </div>


);
}

export default HeaderNav;