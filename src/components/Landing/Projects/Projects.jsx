import React from 'react';
import { sectionStyle , sectionPaddingSides,  sectionPaddingBottom } from '../../Common/Section/SectionContainer.styles';
import { cx } from 'emotion';
import { projectsWrapper, projectsBackgroundImage, rotateImage } from './Projects.styles';
import { useMediaQuery } from 'react-responsive';
import { media } from "../../../enums/media";
import purpleCircuits from '../../../images/Purple-technology-data-internet-72 copy.jpg'
import Tile from '../../Tile/Tile';


const Projects = ({ projectsList, mobileImages })=>{

    const isMobile = useMediaQuery({ query: media.MOBILE })
    const isLaptop = useMediaQuery({ query: media.LAPTOP })

    return(
        <section id="projects-section"
                 className={ cx( sectionStyle, sectionPaddingSides,  sectionPaddingBottom ) }>

            <div className={ projectsWrapper }>
                <h3>Projects</h3>
                <div className={ cx(projectsBackgroundImage) }>
                    { isMobile && (
                        <>
                            <img src={ purpleCircuits } alt=""/>
                            <img className={ rotateImage } src={ purpleCircuits } alt=""/>
                            <img src={ purpleCircuits } alt=""/>
                        </>
                    )}
                    { isLaptop && (<img src={ purpleCircuits } alt=""/>)}
                </div>

                <Tile
                    content={ projectsList }
                    mobileImages={ mobileImages }
                />
            </div>
        </section>
    )
}

export default Projects