import React from 'react';
import { cx } from 'emotion';
import animate from 'animate.css';
import { useMediaQuery } from 'react-responsive'
import {sectionStyle} from '../../Common/Section/SectionContainer.styles';
import { heroBackgroundImg } from '../Home/Home.styles';
import { jobTitle , circleContainer } from "./Hero.styles";
import StencilTim from '../../../images/tim-01-stencil-transparet.png';
import { ReactComponent as QuarterCircle } from '../../../svg/quarter-circle.svg'
import { heroSection, heroContainer , heroContextWrapper, heroContext, heroTitle, heroImage } from "./Hero.styles";

const Hero = () => {

    const isMobile = useMediaQuery({
        query: '(max-device-width: 576px)'
    })

    const isLaptop = useMediaQuery({
        query: '( min-device-width: 768px )'
    })

    const fadeDown = 'animate__animated animate__fadeInDown'

    return(
        <>
            <section className={ cx( sectionStyle , heroSection )}>



                <div id={'one'} className={ heroContainer }>
                    <div id={'two'} className={ heroContextWrapper }>
                        <div id={'three'} className={ heroContext }>

                            { isMobile && (
                                <>
                                    <div id={'four'} className={heroImage} >
                                        <img src={ StencilTim } className={ heroBackgroundImg }/>
                                    </div>

                                    <h1 className={ cx( heroTitle, fadeDown)}>
                                        Hello
                                    </h1>
                                    <h3 className={cx(fadeDown )}> My </h3>
                                    <h3 className={cx(fadeDown )}> name </h3>
                                    <h3 className={cx(fadeDown )}> is </h3>
                                    <h3 className={cx(fadeDown )}> Timothy </h3>
                                </>
                            )}

                            {isLaptop && (
                                <>
                                    <h1 className={ cx( heroTitle, 'animate__animated animate__fadeInDown',)}>
                                        Hello
                                    </h1>

                                    <h3 className={cx('animate__animated animate__fadeInDown', )}>My name is</h3>
                                    <h3 className={cx('animate__animated animate__fadeInDown', )}>Timothy</h3>
                                </>
                            )}

                            <div className={circleContainer} >
                                <QuarterCircle/>
                                <span className={cx(jobTitle , 'animate__animated animate__lightSpeedInRight')} >
                                    Front End Developer
                                </span>
                            </div>
                        </div>
                    </div>

                    {isLaptop && (
                        <div className={heroImage} >
                            <img src={ StencilTim } className={ heroBackgroundImg }/>
                        </div>
                    )}

                </div>
            </section>
        </>
    )
};

export default Hero