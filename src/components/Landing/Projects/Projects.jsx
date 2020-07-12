import React from 'react';
import { useSelector } from "react-redux";
import selectors from '../../../store/Projects/Projects.selector'
import { sectionStyle } from "../../Common/Section/SectionContainer.styles";
import { projectsWrapper } from "./Projects.styles";
import { getNestedProperty } from "../../../helpers/objectUtils";
import Tile from '../../Tile/Tile';

const Projects = ()=>{
    const projectsList = useSelector(state =>
        getNestedProperty(selectors.projects(state) , 'projects'));

    return(
        <section id="projects-section" className={ sectionStyle }>
            <div className={projectsWrapper}>
                <h2>Projects</h2>
                <Tile content={projectsList} />
            </div>
        </section>
    )
}

export default Projects