import React from 'react';
import photo_1 from  "../../../assets/images/slide-img-6.jpg";
import photo_2 from  "../../../assets/images/slide-img-1.jpg";
import photo_3 from  "../../../assets/images/slide-img-2.jpg";
import photo_4 from  "../../../assets/images/slide-img-3.jpg";
import photo_5 from  "../../../assets/images/slide-img-4.jpg";


function Footer() {
    return (
        <div className="pictures-line">
            <div className="pictures-line__content">
                <div className="pictures-line__content__images">
                    <div className="images"><img src={photo_1} alt="img" className="photo"/></div>
                    <div className="images"><img src={photo_2} alt="img" className="photo"/></div>
                    <div className="images"><img src={photo_3} alt="img" className="photo"/></div>
                    <div className="images"><img src={photo_4} alt="img" className="photo"/></div>
                    <div className="images"><img src={photo_5 } alt="img" className="photo"/></div>
                </div>
                <div className="pictures-line__bar"></div>
            </div>
        </div>
    );
}

export default Footer;