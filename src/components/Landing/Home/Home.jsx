import React from 'react';
import LandingNavigation from '../LandingNavigation/LandingNavigation';
import Intro from '../Intro';
import Hero from '../Hero';
import Skills from '../Skills';
import Experience from '../Experience';
import Projects from '../Projects';
import Mixes from '../Mixes';
import Contact from '../Contact';
import {
    SECTION_HOME_ABOUT ,
    SECTION_HOME_SKILLS,
    SECTION_HOME_EXPERIENCE,
    SECTION_HOME_PROJECTS,
    SECTION_HOME_MIXES,
    SECTION_CONTACT,
} from '../../../constants/componentSections';

import { homeSection } from "./Home.styles";

const Home = ()=>{
    return(
        <div id="home-section" className={ homeSection }>
            <LandingNavigation
                sections={[
                    SECTION_HOME_ABOUT,
                    SECTION_HOME_SKILLS,
                    // SECTION_HOME_EXPERIENCE,
                    SECTION_HOME_PROJECTS,
                    SECTION_HOME_MIXES,
                    SECTION_CONTACT,
                ]}
            />
            <Hero/>
            <Intro/>
            <Skills/>
            {/*<Experience/>*/}
            {/*<Projects/>*/}
            {/*<Mixes/>*/}
            {/*<Contact/>*/}
        </div>
    )
};

export default Home