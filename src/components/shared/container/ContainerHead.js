import React from 'react';
import ContainerSection from "../container-section/ContainerSection";

function ContainerHead() {
    return (
        <div>
            <div className="container-fluid content-menu">
                <div className="container content-menu__header">
                    <div className="content-menu__header__title">
                        <h6>Markets & Resources</h6>
                        <h1>Find The Best<br/> Doctor Around You</h1>
                    </div>
                    <div className="content-menu__header__btn">
                        <div className="content-menu__header__btn__left">
                            <button className="btn">Find Doctor &#10010;</button>
                        </div>
                        <div className="content-menu__header__btn__right">
                            <button className="btn">
                                Find Doctor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ContainerSection/>
        </div>
    );
}

export default ContainerHead;