import React from 'react';
import { cx } from 'emotion';
import {sectionStyle} from '../../Common/Section/SectionContainer.styles';
import {
    // heroStyles,

    heroBackgroundImg

} from '../Home/Home.styles';
import StencilTim from '../../../images/tim-01-stencil-transparet.png';
import { heroSection, heroContainer , heroContext , heroImage } from "./Hero.styles";
const Hero = ()=>{
    return(
        <>
            <section className={cx( sectionStyle , heroSection )}>

            <div className={heroContainer}>
                <div className={heroContext}>
                    <h1>Hello</h1>
                    <h3>My name is</h3>
                    <h3>Timothy</h3>
                </div>

                 <span className={heroImage} >
                    <img
                        src={StencilTim}
                        className={heroBackgroundImg}/>
                </span>
            </div>
        </section>
        </>
    )
}

export default Hero