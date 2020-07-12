import React from 'react';
import { sectionStyle } from "../../Common/Section/SectionContainer.styles";
import { projectsWrapper } from "./Projects.styles";
import Tile from '../../Tile/Tile';

const Projects = ()=>{
    return(
        <section id="projects-section" className={ sectionStyle }>
            <div className={projectsWrapper}>
                <h2>Projects</h2>

                <Tile/>
            </div>
        </section>
    )
}

export default Projects