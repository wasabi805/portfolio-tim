import React from 'react';
import { Switch , Route} from 'react-router-dom';
import { ROUTE_HOME , ROUTE_ACBA, ROUTE_DOMS_NOMS , ROUTE_TEST } from "./constants/routeConstants";
import Home from "./components/Landing/Home/Home";
import Acba from "./components/Acba/Acba";

export default function Router() {
    return(
        <Switch>
            <Route exact path={ ROUTE_HOME } component={Home}/>
            <Route path={ ROUTE_ACBA } component={Acba}  />
            <Route path={ ROUTE_TEST } component={() => { window.location = 'https://ebay.com'; return null;} }/>
            <Route path={ ROUTE_DOMS_NOMS } component={() => { window.location = 'https://google.com'; return null;} }/>
        </Switch>
    )
}