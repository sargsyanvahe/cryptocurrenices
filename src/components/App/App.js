import React from 'react';
import Header from "../Header";
import TableContainer from "../Table";
import NotFound from "../NotFound";
import Currency from "../Currency";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Switch>
                        <Redirect exact from='/' to="/page/1"/>
                        <Route exact path='/page/:page' component={TableContainer}/>
                        <Route exact path='/currency/:id' component={Currency}/>
                        <Route path='/404' component={NotFound}/>
                        <Redirect from='*' to='/404'/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
