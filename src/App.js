import React, {useState} from 'react';
import Home from "./components/pages/home/Home";
import {Route, Routes} from "react-router-dom";
import ContactUs from "./components/pages/contactUs/ContactUs";
import ScrollToTop from "./components/shared/scroll-to-top/ScrollToTop";

function App() {

    let [modal, setModal] = useState(false);
    let navigationStatus;

    const handleClick = () => setModal(!modal);

    return (
        <div>
           <Routes>
               <Route path='/' exact element={
                   <Home isOpened={modal}
                         handleClick={handleClick}
                         navigationStatus={navigationStatus = true}/>}/>

               <Route path='/*' exact element={
                   <Home isOpened={modal}
                         handleClick={handleClick}
                         navigationStatus={navigationStatus = true}/>}/>

                <Route path='/contact' element={
                    <ContactUs isOpened={modal}
                               handleClick={handleClick}
                               navigationStatus={navigationStatus = false}/>}/>}
            </Routes>
            <ScrollToTop/>
        </div>
    );
}

export default App;
