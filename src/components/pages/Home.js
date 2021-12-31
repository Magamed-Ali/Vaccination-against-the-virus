import React from 'react';
import Carousel from "../shared/Carousel";


function Home(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Carousel/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;