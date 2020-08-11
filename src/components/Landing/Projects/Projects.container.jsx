import React, { useEffect } from 'react';
import selectors from '../../../store/Projects/Projects.selector';
import { useSelector } from "react-redux";
import Projects from './Projects';
import {getNestedProperty} from "../../../helpers/objectUtils";

const ProjectsContainer = ()=>{
    const mobileImages = useSelector( state=>
        getNestedProperty( selectors.projects(state) , 'mobileImg') )

    const projectsList = useSelector( state =>{
        return selectors.projects(state).projects
    })

    return(
        <Projects projectsList={projectsList} mobileImages={mobileImages} />
    )
}

export default ProjectsContainer