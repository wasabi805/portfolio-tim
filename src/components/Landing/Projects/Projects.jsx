import React from 'react';
import { useSelector } from "react-redux";
import selectors from '../../../store/Projects/Projects.selector'
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { projectsWrapper, projectsBackgroundImage, rotateImage } from './Projects.styles';
import { getNestedProperty } from "../../../helpers/objectUtils";
import purpleCircuits from '../../../images/Purple-technology-data-internet-72 copy.jpg'
import Tile from '../../Tile/Tile';
import { useMediaQuery } from 'react-responsive';
import {media} from "../../../enums/media";

const Projects = ()=>{
    const projectsList = useSelector( state =>
        getNestedProperty( selectors.projects(state) , 'projects'));

    const isMobile = useMediaQuery({ query: media.MOBILE })
    const isLaptop = useMediaQuery({ query: media.LAPTOP })

    return(
        <section id="projects-section" className={ sectionStyle }>
            <div className={ projectsWrapper }>

                <h2>Projects</h2>
                <div className={ projectsBackgroundImage }>


                    { isMobile && (
                        <>
                            <img src={ purpleCircuits } alt=""/>
                            <img className={ rotateImage } src={ purpleCircuits } alt=""/>
                            <img src={ purpleCircuits } alt=""/>
                        </>
                    )}

                    { isLaptop && (
                        <>
                            <img src={ purpleCircuits } alt=""/>
                            </>
                    )}



                </div>

                <Tile content={ projectsList } />
            </div>
        </section>
    )
}

export default Projects