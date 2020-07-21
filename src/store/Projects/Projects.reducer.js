import { handleActions } from 'redux-actions';
import actions from '../Projects/Projects.actions';
import DevConnectorImg from '../../images/dev-connector.png';
import DomsNomsImg from '../../images/doms-noms-tile.png';
import LandingExample from '../../images/landing-page.png';

const initialStore = {
    stuff: 'things',
    projects:[
        { id: 'dev-connector-tile' ,image: DevConnectorImg , href: 'https://fast-reef-49361.herokuapp.com/' ,  title: 'DevConnector', context: 'A project example that for dashboard layout and functionality including register and login.'},
        { id: "doms-noms-tile" ,image: DomsNomsImg , href: 'http://www.doms-noms.com/', title: "Dom's Noms", context: 'A start up mobile bbq catering business.'},
        { id: "aws-landing-tile" ,image: LandingExample, href: 'http://ec2-34-223-204-233.us-west-2.compute.amazonaws.com/', title: 'Hero Landing', context: 'A project example for a Hero Landing page'},
    ]
}

export default handleActions({
    [actions.somePlaceholder] : ( state )=>({
        ...state
    }) ,
}, initialStore)