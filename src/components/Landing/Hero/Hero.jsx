import React from 'react';
import { cx } from 'emotion';
import { animation } from '../../../enums/animation';
import { useMediaQuery } from 'react-responsive';
import { media } from '../../../enums/media';
import {sectionStyle} from '../../Common/Section/SectionContainer.styles';
import { heroBackgroundImg } from '../Home/Home.styles';
import { jobTitle , circleContainer } from "./Hero.styles";
import StencilTim from '../../../images/tim-01-stencil-transparet.png';
import { ReactComponent as QuarterCircle } from '../../../svg/quarter-circle.svg'
import { heroSection, heroContainer , heroContextWrapper, heroContext, heroTitle, heroImage , headingLineTwo, headingLineThree, headingLineFour} from "./Hero.styles";

const Hero = () => {

    const isTablet = useMediaQuery({ query: media.LAPTOP })
    const isDesktop = useMediaQuery({query: media.DESKTOP})

    const TitleText = ({ text , className })=> <h3 className={cx(animation.FADE_IN_DOWN , className )}> { text } </h3>

    return(
        <>
            <section id={'about-section'} className={ cx( sectionStyle , heroSection )}>
                <div className={ heroContainer }>
                    <div className={ heroContextWrapper }>
                        <div className={ heroContext }>

                            <div className={heroImage}>
                                {isTablet && <img src={ StencilTim } className={ heroBackgroundImg }/>}
                            </div>

                            <h1 className={ cx( heroTitle, animation.FADE_IN_DOWN)}>
                                Hello
                            </h1>
                            <TitleText text={'My'} className={headingLineTwo}/>
                            <TitleText text={'name is'} className={headingLineThree} />
                            <TitleText text={'Timothy'} className={ headingLineFour }/>

                            <div className={circleContainer} >
                                <QuarterCircle/>
                                <span className={cx(jobTitle , animation.LS_IN_RIGHT)} >
                                    Full Stack Developer
                                </span>
                            </div>
                        </div>
                    </div>

                    {isDesktop && (
                        <div className={ heroImage } >
                            <img src={ StencilTim } className={ heroBackgroundImg }/>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
};

export default Hero