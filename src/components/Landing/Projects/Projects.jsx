import React from 'react';
import { css } from 'emotion';
import { useSelector } from "react-redux";
import selectors from '../../../store/Projects/Projects.selector'
import { sectionStyle } from "../../Common/Section/SectionContainer.styles";
import { projectsWrapper } from "./Projects.styles";
import { getNestedProperty } from "../../../helpers/objectUtils";
import purpleCircuits from '../../../images/Purple-technology-data-internet-72 copy.jpg'
import Tile from '../../Tile/Tile';

const Projects = ()=>{
    const projectsList = useSelector(state =>
        getNestedProperty(selectors.projects(state) , 'projects'));

    return(
        <section id="projects-section" className={ sectionStyle }>
            <div className={ projectsWrapper }>
                <h2>Projects</h2>
                <div style={{
                    position: 'absolute',
                    opacity: 0.4,
                    right: 0
                }}>
                    <img className={css({ display: 'block' })} src={ purpleCircuits } alt=""/>
                    {/*<img src={purpleCircuits} alt=""*/}
                    {/*     style={{*/}
                    {/*         display: 'block',*/}
                    {/*         rotation: '180deg'*/}
                    {/*     }}*/}
                    {/*/>*/}
                </div>

                <Tile content={ projectsList } />
            </div>
        </section>
    )
}

export default Projects