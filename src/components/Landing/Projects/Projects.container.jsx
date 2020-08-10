import React, { useEffect } from 'react';
import actions from '../../../store/Projects/Projects.actions';
import selectors from '../../../store/Projects/Projects.selector';
import { useSelector } from "react-redux";
import Projects from './Projects';
import {getNestedProperty} from "../../../helpers/objectUtils";

const ProjectsContainer = ()=>{
    useEffect(()=>{
        // actions.fetchProjects()
    },[])

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