import React from 'react';
import HistoryPolyclinic from "../../button/Home/HistoryPolyclinic";
import Carousel from "../../button/Home/Carousel";


function Home(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <span></span>
                        <span></span>
                        <HistoryPolyclinic/>
                        <Carousel/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;