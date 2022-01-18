import React from 'react';
import Home from "./components/pages/home/Home";
import {Route, Routes} from "react-router-dom";
import ContactUs from "./components/pages/contactUs/ContactUs";


function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
            </Routes>
        </>
    );
}

export default App;
