import React from 'react';
import Header from "./components/shared/header/Header";
import "./styles/style.scss"
import {Route, Routes} from "react-router-dom";
import Contact from "./components/shared/contact/Contact";


function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </>
    );
}

export default App;
