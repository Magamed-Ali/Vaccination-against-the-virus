import React from 'react';
import Navbar from "./Navbar";
import style from "../../index.module.scss";
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
            </Routes>
            <Routes>
                <Route path='/historyOfVaccinated' element={<HistoryOfVaccinated/>}/>
            </Routes>
            <Routes>
                <Route path='/home' element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path='/vaccinated' element={<Vaccinated/>}/>
            </Routes>

        </>
)
}

export default ContainerNavebar;