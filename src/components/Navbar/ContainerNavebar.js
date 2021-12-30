import React from 'react';
import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom";
import Form from "../Form/Form";
import HistoryOfVaccinated from "../HistoryOfVaccinated/HistoryOfVaccinated";
import Home from "../Home/Home";
import Vaccinated from "../Vaccinated/Vaccinated";

function ContainerNavebar(props) {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/form' element={<Form/>}/>
                <Route path='/historyOfVaccinated' element={<HistoryOfVaccinated/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/vaccinated' element={<Vaccinated/>}/>
            </Routes>

        </>
)
}

export default ContainerNavebar;