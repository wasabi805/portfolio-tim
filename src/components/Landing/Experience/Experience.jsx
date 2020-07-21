import React from 'react';
import { sectionStyle } from "../../Common/Section/SectionContainer.styles";
import { experienceWrapper } from "./Experience.styles";
import SimpleSlider from '../../Carousel';

const Experience = ({ slides })=>{
    return(
        <section id="experience-section" className={ sectionStyle }>
            <div className={experienceWrapper}>
                <h2>Experience</h2>

                <div>
                    <div style={{
                        border: '1px solid lime',
                        display: 'grid',
                        gridTemplateColumns:  'auto 33%',
                        gridTemplateRows:   '1fr',
                    }}>
                        <div style={{border: '1px solid magenta', height: '60vh'}}>
                            1
                        </div>

                        <div style={{border: '1px solid cyan'}}>
                            2
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience