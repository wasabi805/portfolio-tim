import React from 'react';
import { cx } from 'emotion';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { IntroContainer, IntroContext, ampersand } from './Intro.styles';

const Intro = ()=>{
    return(
        <section className={cx(sectionStyle , IntroContainer)}>
               <div className={ cx(IntroContext) } >
                   <h4>
                       Based out of Phoenix Metro Area, AZ. I specialize in crafting stylish custom websites.
                       If you like hip-hop and R<span className={ampersand}>&</span>B,
                       checkout my mix below. Thanks for stopping by!
                   </h4>
               </div>
        </section>
    )
}

export default Intro