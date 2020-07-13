import React from "react";
import PropTypes from 'prop-types';
import Navigation from "./Navigation";
import { withRouter } from 'react-router-dom'
import {ROUTE_HOME , ROUTE_ACBA} from "../../constants/routeConstants";

const NavigationContainer = ({ history })=>{
    const goHome = ()=>{
        history.push(ROUTE_HOME)
    }
    const goAcba = ()=>{
        history.push(ROUTE_ACBA)
    }
    return(
        <Navigation
            goHome={goHome}
            goAcba={goAcba}
        />
    )
}

NavigationContainer.propTypes={
    history: PropTypes.shape({}).isRequired,
}

export default withRouter(NavigationContainer)