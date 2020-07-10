import React from 'react';
import { sectionStyle } from "../../Common/Section/SectionContainer.styles";
import { experienceWrapper } from "./Experience.styles";
import SimpleSlider from '../../Carousel';

import Allstate from '../../../images/allstate_logo.png';
import SherwinWilliams from '../../../images/SherwinWilliams.png'

const Experience = ({slides})=>{

    return(
        <section id="experience-section" className={ sectionStyle }>
            <div className={experienceWrapper}>
                <h2>Experience</h2>
                <SimpleSlider
                    slideContent={slides}
                    slideImages={[Allstate, SherwinWilliams]}
                />
            </div>
        </section>
    )
}

export default Experience