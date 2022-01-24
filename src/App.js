import React from 'react';
import Home from "./components/pages/home/Home";
import {Route, Routes} from "react-router-dom";
import ContactUs from "./components/pages/contactUs/ContactUs";
import ScrollToTop from "./components/shared/scrollToTop/ScrollToTop";

function App() {

    return (
        <>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
            </Routes>
            <ScrollToTop/>
        </>
    );
}

export default App;
