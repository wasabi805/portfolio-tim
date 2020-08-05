import React from 'react';
import { cx , css} from 'emotion';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { IntroContainer, IntroContext } from './Intro.styles';

const test = css({
    fontFamily: 'Morganite-SemiBold',
    letterSpacing: '1px',
})

const Intro = ()=>{
    return(
        <section className={cx(sectionStyle , IntroContainer)}>
               <div className={ cx(IntroContext, test , 'testMe') } >
                   <h4>
                       Based out of Phoenix Metro Area, AZ. I specialize in crafting stylish custom websites.
                       If you like hip-hop and R<span style={{fontFamily: 'Arial', fontSize: '2vw'}}>&</span>B,
                       checkout my mix below. Thanks for stopping by!
                   </h4>
               </div>
        </section>
    )
}

export default Intro