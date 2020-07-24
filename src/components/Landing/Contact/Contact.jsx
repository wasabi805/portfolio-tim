import React from 'react';
import { cx } from 'emotion';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import {
    sectionTitle ,
    footer,
    footerWrapper,
    footerContainer,
    iconWrapper,
    iconContainer,
    iconWrapperText,
    contactInfo,
    socialIconContainer,

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
                    <h3 style={{
                        position: 'absolute',
                        fontSize: '4vw',
                        paddingLeft: '5vw',

                    }} >Contact</h3>
                   <div>
                       <div className={contactInfo}>
                           <span className={ iconContainer }>
                               <span className={iconWrapper}>
                                   <PinSvg/>
                               </span>
                           </span>
                           <p className={ iconWrapperText }>Tempe, Arizona</p>
                       </div>


                       <div className={contactInfo}>
                           <span className={ iconContainer }>
                               <span className={iconWrapper}>
                                   <PhoneSvg/>
                               </span>
                           </span>
                           <p className={ iconWrapperText }>650 464 9906</p>
                       </div>

                       <div className={contactInfo}>
                           <span className={ iconContainer }>
                               <span className={iconWrapper}>
                                   <EmailSvg/>
                               </span>
                           </span>
                           <p className={ iconWrapperText }>timothy.j.ocampo@gmail.com</p>
                       </div>
                   </div>

                {/* ----    -----   -----   -----   -----   ----    ----    ----    ----    ---   */}

                </div>

                <div className={ footerContainer } >
                    <div>
                        <div style={{
                            padding:' 20%',
                        }}>
                            <h4>
                                About Timothy...
                            </h4>

                            <p>
                                Lorem ipsum blah blah blah blah
                                blah blah blah blah blah blah
                                blah blah blah blah blah blah
                            </p>

                            <div style={{
                                display: 'flex',
                                border: '1px solid cyan',
                                zIndex: 10,
                            }}>
                                <span className={ socialIconContainer }>
                                    <span>
                                        <FacebookIcon/>
                                    </span>
                                </span>

                                <span className={ socialIconContainer }>
                                    <span>
                                        <TwitterIcon/>
                                    </span>
                                </span>

                                <span className={ socialIconContainer }>
                                    <span>
                                        <LinkedInIcon/>
                                    </span>
                                </span>

                                <span className={ socialIconContainer }>
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