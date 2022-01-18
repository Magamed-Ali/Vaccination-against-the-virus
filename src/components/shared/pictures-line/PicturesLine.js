import React from 'react';

function Footer() {

    return (

        <div className="pictures-line">
            <div className="pictures-line__content">
                <div className="pictures-line__content-images">
                    <div className="picture"><img src="./assets/images/slide-img-6.jpg" alt="img" className="photo"/></div>
                    <div className="picture"><img src="./assets/images/slide-img-1.jpg" alt="img" className="photo"/></div>
                    <div className="picture"><img src="./assets/images/slide-img-2.jpg" alt="img" className="photo"/></div>
                    <div className="picture"><img src="./assets/images/slide-img-3.jpg" alt="img" className="photo"/></div>
                    <div className="picture"><img src="./assets/images/slide-img-4.jpg" alt="img" className="photo"/></div>
                </div>
                <div className="pictures-line__bar"></div>
            </div>
        </div>
    );
}

export default Footer;