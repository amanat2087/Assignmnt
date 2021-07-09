import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';

const Routing=()=>{
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>

        </Switch>
        </BrowserRouter>
    )
}

export default Routing;