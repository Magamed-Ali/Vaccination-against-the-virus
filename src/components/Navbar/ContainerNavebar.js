import React from 'react';
import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom";
import Form from "../pages/Form";
import History from "../pages/History";
import Home from "../pages/Home";
import Vaccinated from "../pages/Vaccinated";

function ContainerNavebar(props) {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/historyOfVaccinated' element={<History/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/vaccinated' element={<Vaccinated/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>

        </>
)
}

export default ContainerNavebar;