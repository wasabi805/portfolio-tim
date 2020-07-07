import React from 'react';
import { sectionStyle } from "../../Common/Section/SectionContainer.styles";
import { experienceWrapper } from "./Experience.styles";

const Experience = ()=>{
    return(
        <section id="experience-section" className={ sectionStyle }>
            <div className={experienceWrapper}>
                <h2>Experience</h2>

                <div className={'experience-card'}
                     style={{
                         height: '500px',
                         width: '100%',
                         background: '#59717126',
                     }}>
                </div>

            </div>
        </section>
    )
}

export default Experience