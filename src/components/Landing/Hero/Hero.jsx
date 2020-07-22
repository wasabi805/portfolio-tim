import React from 'react';
import { cx } from 'emotion';
import animate from 'animate.css';
import {sectionStyle} from '../../Common/Section/SectionContainer.styles';
import { heroBackgroundImg } from '../Home/Home.styles';
import { jobTitle , circleContainer } from "./Hero.styles";
import StencilTim from '../../../images/tim-01-stencil-transparet.png';
import { ReactComponent as QuarterCircle } from '../../../svg/quarter-circle.svg'
import { heroSection, heroContainer , heroContextWrapper, heroContext , heroImage } from "./Hero.styles";

const Hero = () => {
    return(
        <>
            <section className={ cx( sectionStyle , heroSection )}>
                <div className={ heroContainer }>
                    <div className={ heroContextWrapper }>
                        <div className={ heroContext }>
                            <h1
                                className={
                                    cx('animate__animated animate__fadeInDown', )}>
                                Hello
                            </h1>
                            <h3 className={
                                cx('animate__animated animate__fadeInDown', )}>My name is</h3>
                            <h3 className={
                                cx('animate__animated animate__fadeInDown', )}>Timothy</h3>

                            <div className={circleContainer} >
                                <QuarterCircle/>
                                <span className={cx(jobTitle , 'animate__animated animate__lightSpeedInRight')} >
                                    Front End Developer
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={heroImage} >
                        <img src={ StencilTim } className={ heroBackgroundImg }/>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Hero