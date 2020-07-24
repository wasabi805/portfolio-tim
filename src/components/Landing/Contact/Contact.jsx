import React from 'react';
import { cx , css } from 'emotion';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import {
    sectionTitle ,
    footer,
    footerWrapper,
    footerContainer,
    footerContextWrapper,
    iconWrapper,
    contactEmail,
    contactPhone,
    contactLocation,
    iconContainer,
    iconWrapperText,
    contactInfo,
    socialMediaContainer,
    socialIconWrapper,
    } from './Contact.styles';
import {ReactComponent as PinSvg} from '../../../svg/placeholder.svg';
import {ReactComponent as PhoneSvg} from '../../../svg/phone.svg';
import {ReactComponent as EmailSvg} from '../../../svg/commerce-and-shopping.svg';
import {ReactComponent as FacebookIcon} from '../../../svg/facebook (2).svg';
import {ReactComponent as TwitterIcon} from '../../../svg/twitter (1).svg';
import {ReactComponent as LinkedInIcon} from '../../../svg/linkedin (3).svg';
import {ReactComponent as GithubIcon} from '../../../svg/github.svg';

const Contact = ()=>{
    return(
        <section id="contact-section" className={cx(sectionStyle, footer )}>
            <div className={footerWrapper}>
                <div className={ footerContainer }>
                    <h5>Contact</h5>
                   <div>
                       <div className={contactInfo}>
                           <span className={ iconContainer }>
                               <span className={iconWrapper}>
                                   <PinSvg/>
                               </span>
                           </span>
                           <p className={ cx(iconWrapperText, contactLocation)} >Tempe, Arizona</p>
                       </div>


                       <div className={contactInfo}>
                           <span className={ iconContainer }>
                               <span className={iconWrapper}>
                                   <PhoneSvg/>
                               </span>
                           </span>
                           <p className={ cx(iconWrapperText , contactPhone) }>650 464 9906</p>
                       </div>

                       <div className={contactInfo}>
                           <span className={ iconContainer }>
                               <span className={iconWrapper}>
                                   <EmailSvg/>
                               </span>
                           </span>
                           <p className={ cx(iconWrapperText , contactEmail) }>tim@proletdev.com</p>
                       </div>
                   </div>

                {/* ----    -----   -----   -----   -----   ----    ----    ----    ----    ---   */}

                </div>

                <div className={ footerContainer } >
                    <div>
                        <div className={ footerContextWrapper} >
                            <h4>
                                About Timothy...
                            </h4>

                            <p>
                                I love Barro's pizza and playing Gears. Let's be internet BFFs.
                            </p>

                            <div className={ socialMediaContainer }  >
                                <span className={ socialIconWrapper }>
                                    <span>
                                        <FacebookIcon/>
                                    </span>
                                </span>

                                <span className={ socialIconWrapper }>
                                    <span>
                                        <TwitterIcon/>
                                    </span>
                                </span>

                                <span className={ socialIconWrapper }>
                                    <span>
                                        <LinkedInIcon/>
                                    </span>
                                </span>

                                <span className={ socialIconWrapper }>
                                    <span>
                                        <GithubIcon/>
                                    </span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact