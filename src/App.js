import React from 'react';
import Header from "./components/Header";
import { Switch, Route, Redirect } from "react-router-dom";

import TableContainer from "./components/Table";
import NotFound from "./components/NotFound";

import Currency from "./components/Currency";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                    <Header/>
                    <Switch>
                        <Redirect exact from='/' to="/page/1"/>
                        <Route exact path='/page/:page' component={TableContainer}/>
                        <Route exact path='/currency/:id' component={Currency}/>
                        <Route path='/404' component={NotFound}/>
                        <Redirect from='*' to='/404'/>
                    </Switch>
            </div>
        );
    }
}

export default App;
