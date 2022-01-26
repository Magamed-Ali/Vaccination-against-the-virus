import React, {useState} from 'react';
import Home from "./components/pages/home/Home";
import {Route, Routes} from "react-router-dom";
import ContactUs from "./components/pages/contactUs/ContactUs";

function App() {

    let [modal, setModal] = useState(false);

    let handleClick = () => setModal(!modal);

    return (
        <>
            <Routes>
                <Route path='/' exact element={<Home isOpened={modal} handleClick={handleClick}/>}/>
                <Route path='/contact' element={<ContactUs isOpened={modal} handleClick={handleClick}/>}/>
            </Routes>
        </>
    );
}

export default App;
