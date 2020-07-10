import { handleActions } from 'redux-actions';
import actions from './Experience.Actions';
import Allstate from '../../images/allstate_logo.png';
import SherwinWilliams from '../../images/SherwinWilliams.png';
import DomsNoms from '../../images/domsNoms.png';

const initialStore = {
    stuff: 'things',
    slides: [
        {
            companyName: 'Allstate' ,
            position: "React UI Developer",
            summary: "Worked on a SCRUM Agile team to create an internal platform for Insurance agents. ",
            responsibilities:[
                'Created new features according to demands of users and shareholders. Fixed defects',
                'Created custom React components for UI user dashboard interface such as forms, dropdowns, tabs, buttons, pagination, search fields , etc',
                'Converted older class components into functional components using hooks.',
                'Created styled HOC components and used internal CSS libraries to create custom UI interface components',
                'Worked on functionality for custom bpmn modeler using bpmn.js . Modeler would store data as Xml files to be consumed by JAVA API endpoints.',
                'Created React Sagas to make API calls to MongoDB and update Redux store.',
                'Created redux actions and selectors.',
                'Used React Router to navigate site areas and load components.',
                'Performed unit and integration tests using Jest and Enzyme.',
                'Helped onboard new developers',
                'Used GitHub for version control.',
            ],
            img: Allstate,
        },

        {
            companyName: "Sherwin Williams" ,
            position: "UI Developer",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Lacus luctus accumsan tortor posuere ac.",
            responsibilities:[
                'i did this with JavaScript',
                'i did that with HTML',
                'i like turtles',
            ],
            img: SherwinWilliams,
        },

        {
            companyName: "DOM's Noms" ,
            position: "Full Stack Developer",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Lacus luctus accumsan tortor posuere ac.",
            responsibilities:[
                'i did this with react',
                'i did that with redux',
                'i like turtles',
            ],
            img: DomsNoms,
        },
        {
            companyName: "SB Sit N' Stay" ,
            position: "Full Stack Developer",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Lacus luctus accumsan tortor posuere ac.",
            responsibilities:[
                'i did this with CSS',
                'i did that with SASS',
                'i like turtles',
            ],
        },
    ]
}

export default handleActions({
    [actions.somePlaceholder] : ( state )=>({
        ...state
    }) ,
} , initialStore)

