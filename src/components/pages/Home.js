import React from 'react';
import HistoryPolyclinic from "../shared/button/Home/HistoryPolyclinic";
import Carousel from "../shared/button/Home/Carousel";


function Home(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <HistoryPolyclinic/>
                        <Carousel/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;