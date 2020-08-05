import React from 'react';
import { cx } from 'emotion';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { IntroContainer, IntroContext } from './Intro.styles';


const Intro = ()=>{
    return(
        <section className={cx(sectionStyle , IntroContainer)}>
               <div className={ IntroContext } >
                   <h4
                       style={{
                           fontFamily: 'Morganite-SemiBold',
                           // fontSize: '40px',
                           // marginRight: '10%',
                           // marginTop: '5%',
                           // marginLeft: '10%',
                           // paddingTop: '2vh',
                       }}>
                       Based out of Phoenix Metro Area, AZ. I specialize in crafting stylish custom websites.
                       If you like hip-hop and R<span style={{fontFamily: 'Arial', fontSize: '2vw'}}>&</span>B,
                       checkout my mix below. Thanks for stopping by!
                   </h4>
               </div>
        </section>
    )
}

export default Intro