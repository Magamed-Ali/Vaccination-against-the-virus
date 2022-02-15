import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function PageDoctors() {

    /*const [data, setData] = useState();

    useEffect(() => {
        fetch('/doctors')
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [])*/


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-6 doctor">
                    <div className="doctor__wrapper">
                        <div className="doctor__wrapper-image">
                            <img src=""/>
                        </div>
                        <div className="doctor__wrapper-detail">
                            <h5><a href="">asdfa</a></h5>
                            <span className="complete">&#9733;</span>
                            <span className="blank">&#9734;</span>
                            <p className="profession">
                                <a href="">asdfasdf</a></p>
                            <p className="icon">
                                <FontAwesomeIcon icon="search-location"/> asdfasdf</p>
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 doctor">
                    <div className="doctor__wrapper">
                        <div className="doctor__wrapper-image">
                            <img src=""/>
                        </div>
                        <div className="doctor__wrapper-detail">
                            <h5><a href="">asdfa</a></h5>
                            <span className="complete">&#9733;</span>
                            <span className="blank">&#9734;</span>
                            <p className="profession">
                                <a href="">asdfasdf</a></p>
                            <p className="icon">
                                <FontAwesomeIcon icon="search-location"/> asdfasdf</p>
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageDoctors;