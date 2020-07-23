import React from 'react';
import { cx } from 'emotion';
import animate from 'animate.css';
import { animation } from '../../../enums/animation';
import { useMediaQuery } from 'react-responsive';
import { media } from '../../../enums/media';
import {sectionStyle} from '../../Common/Section/SectionContainer.styles';
import { heroBackgroundImg } from '../Home/Home.styles';
import { jobTitle , circleContainer } from "./Hero.styles";
import StencilTim from '../../../images/tim-01-stencil-transparet.png';
import { ReactComponent as QuarterCircle } from '../../../svg/quarter-circle.svg'
import { heroSection, heroContainer , heroContextWrapper, heroContext, heroTitle, heroImage } from "./Hero.styles";

const Hero = () => {

    const isMobile = useMediaQuery({ query: media.MOBILE })
    const isLaptop = useMediaQuery({ query: media.LAPTOP })
    const TitleText = ({ text })=> <h3 className={cx(animation.FADE_IN_DOWN )}> { text } </h3>

    return(
        <>
            <section className={ cx( sectionStyle , heroSection )}>
                <div className={ heroContainer }>
                    <div className={ heroContextWrapper }>
                        <div className={ heroContext }>

                            { isMobile && (
                                <>
                                    <div className={heroImage} >
                                        <img src={ StencilTim } className={ heroBackgroundImg }/>
                                    </div>

                                    <h1 className={ cx( heroTitle, animation.FADE_IN_DOWN)}>
                                        Hello
                                    </h1>
                                    <TitleText text={'My'} />
                                    <TitleText text={'name is'} />
                                    <TitleText text={'Timothy'} />
                                </>
                            )}

                            {isLaptop && (
                                <>
                                    <h1 className={ cx( heroTitle, animation.FADE_IN_DOWN,)}>
                                        Hello
                                    </h1>

                                    <TitleText text={'My name is'}/>
                                    <TitleText text={'Timothy'}/>
                                </>
                            )}

                            <div className={circleContainer} >
                                <QuarterCircle/>
                                <span className={cx(jobTitle , animation.LS_IN_RIGHT)} >
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