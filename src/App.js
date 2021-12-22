import style from './index.module.css';
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import HistoryOfVaccinated from "./components/HistoryOfVaccinated/HistoryOfVaccinated";
import Home from "./components/Home/Home";
import Vaccinated from "./components/Vaccinated/Vaccinated";
import {Route} from "react-router-dom";


function App() {

    return (
        <div>
            <Navbar/>
            <div className={style.appWrapper}>
                <Route path='/form' render={() => <Form/>}/>
                <Route path='/historyOfVaccinated' render={() => <HistoryOfVaccinated/>}/>
                <Route path='/home' render={() => <Home/>}/>
                <Route path='/vaccinated' render={() => <Vaccinated/>}/>
            </div>
        </div>

    );
}

export default App;
