import React from 'react';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { experienceWrapper } from "./Experience.styles";
import SimpleSlider from '../../Carousel';

const Experience = ({ slides })=>{
    return(
        <section id="experience-section" className={ sectionStyle }>
            <div className={ experienceWrapper }>
                <h2>Experience</h2>
                <SimpleSlider slideContent={ slides }/>
            </div>
        </section>
    )
}

export default Experience