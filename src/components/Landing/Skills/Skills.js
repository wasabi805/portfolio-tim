import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { sectionStyle , sectionPaddingBottom } from '../../Common/Section/SectionContainer.styles';

import {
    skillsSectionTitle,
    skillsBackgroundWrapper,
    skillWrapper,
    skillsBannerIMage,
    purpleCircuitsRotated,
    purpleCircuitsRS,
} from './Skills.styles';

import CardDeck from "../../Cards";
import purpleCircuits from '../../../images/Purple-technology-data-internet-72 copy.jpg'
const Skills = ({ cards })=>{

    return(
        <section id="skills-section" className={ cx(sectionStyle, sectionPaddingBottom ) } >
            <h2 className={ skillsSectionTitle }>Skills</h2>
            <div className={ skillsBackgroundWrapper }>
                <div id={'skills-purple'}>
                    <img
                        className={ purpleCircuitsRS }
                        src={ purpleCircuits }
                    />
                </div>

            </div>
            <div className={ skillWrapper }>
               <div>
                   <img className={ skillsBannerIMage }/>
               </div>

                <CardDeck cards={ cards }/>
            </div>
        </section>
    )
};

Skills.defaultProps={
    cards: undefined,
};

Skills.propTypes={
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
    }))
};

export default Skills