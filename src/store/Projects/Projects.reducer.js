import { handleActions } from 'redux-actions';
import actions from "../Projects/Projects.actions";
import DevConnectorImg from '../../images/dev-connector.png';
import DomsNomsImg from '../../images/doms-noms-tile.png';
import LandingExample from '../../images/landing-page.png';


const initialStore = {
    stuff: 'things',
    projects:[
        { id: 'dev-connector-tile' ,image: DevConnectorImg , title: 'DevConnector', context: 'A project example that for dashboard layout and functionality including register and login.'},
        { id: "doms-noms-tile" ,image: DomsNomsImg , title: "Dom's Noms", context: 'A start up mobile bbq catering business.'},
        { id: "aws-landing-tile" ,image: LandingExample , title: 'Hero Landing', context: 'A project example for a Hero Landing page'},
    ]

}

export default handleActions({
    [actions.somePlaceholder] : ( state )=>({
        ...state
    }) ,
} , initialStore)