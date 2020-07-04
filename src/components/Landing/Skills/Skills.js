import React from 'react';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { skillsTile , skillWrapper, skillsBannerIMage } from './Skills.styles';
import {
    LANGUAGES ,
    FRAMEWORKS,
    STATE_MANAGEMENT,
    TECHNOLOGIES,
    STYLE_TECH,
} from '../../../constants/skillsConstants';

import maxHeadroom from '../../../images/max-headroom.png'
console.log(maxHeadroom, 'maxHeadroom')

const Skills = ()=>{
    return(
        <section id="skills-section" className={ sectionStyle } >
            <div className={skillWrapper}>
                <img className={skillsBannerIMage}/>
                <h2> | Skills |</h2>
                <div className={skillsTile}>
                    <p>Languages
                        <ul>
                            {LANGUAGES.map(lang=><li>{lang}</li>)}
                        </ul>

                        <div>FrameWorks
                            <ul>
                                {FRAMEWORKS.map(fm=><li>{fm}</li>)}
                            </ul>
                        </div>

                        <div>State Mgmt
                            <ul>
                                {STATE_MANAGEMENT.map(sm=><li>{sm}</li>)}
                            </ul>
                        </div>
                    </p>

                    <p>Tech_N'_Tools
                        <ul>
                            {TECHNOLOGIES.map(tech=><li>{tech}</li>)}
                        </ul>
                    </p>

                    <p>Style_N'_Things
                        <ul>
                            {STYLE_TECH.map(st=><li>{st}</li>)}
                        </ul>
                    </p>

                    <div>
                        Skills Blurb : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills