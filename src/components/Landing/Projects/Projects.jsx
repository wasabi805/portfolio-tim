import React from 'react';
import { sectionStyle } from "../../Common/Section/SectionContainer.styles";
import { projectsWrapper } from "./Projects.styles";

const Projects = ()=>{
    return(
        <section id="projects-section" className={ sectionStyle }>
            <div className={projectsWrapper}>
                <h2>Projects</h2>
            </div>
        </section>
    )
}

export default Projects