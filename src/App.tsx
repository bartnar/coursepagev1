import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Community from "./Community/Community";
import Wrapper from "./Wrapper/Wrapper";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={Community}/>
                    <Route exact path='/community' component={Community}/>
                    <Route exact path='/stats' component={Wrapper}/>
                    <Route exact path='/whatsnew' component={Wrapper}/>
                    <Route exact path='/progress' component={Wrapper}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
