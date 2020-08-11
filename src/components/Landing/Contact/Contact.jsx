import React from 'react';
import { cx , css } from 'emotion';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { CONTACTS } from "../../../constants/contact";
import {
    footer,
    footerWrapper,
    footerContainer,
    footerContextContainer,
    footerContextWrapper,
    contactSvgContainer,
    contactEmail,
    contactPhone,
    contactLocation,
    contactIconContainer,
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

import SvgIconInline from "../../Common/SvgIcon/SvgIconInline";
import SvgIconSocial from '../../Common/SvgIcon/SvgIconSocial'

const contactIconTheme = {
    iconWrapper: [ contactInfo ],
    svgWrapper: [ contactIconContainer ],
    svgContainer: [contactSvgContainer],
    iconText: [iconWrapperText ]
}

const locationTheme = {
    ...contactIconTheme,
    iconText: {...contactIconTheme.iconText , contactLocation}
}
const phoneTheme = {
    ...contactIconTheme,
    iconText: [...contactIconTheme.iconText, contactPhone ]
}

const emailTheme = {
    ...contactIconTheme,
    iconText: [...contactIconTheme.iconText, contactEmail ]
}

const Contact = ()=>{
    return(
        <section id="contact-section" className={cx(sectionStyle, footer )}>
            <div className={footerWrapper}>
                <div className={ footerContainer }>
                    <h5>Contact</h5>
                   <div className={ footerContextContainer }>

                       <SvgIconInline
                           theme={ locationTheme }
                           text={CONTACTS.location}
                           svg={<PinSvg/>}
                       />

                       <SvgIconInline
                           theme={ phoneTheme }
                           text={CONTACTS.phone}
                           svg={<PhoneSvg/>}
                       />

                       <SvgIconInline
                           theme={ emailTheme }
                           text={CONTACTS.email}
                           svg={<EmailSvg/>}
                       />
                   </div>
                </div>

                {/* ----    -----   -----   -----   -----   ----    ----    ----    ----    ---   */}

                <div className={ footerContainer } >
                    <div className={css({marginTop: '12px'})}>
                        <div className={ footerContextWrapper} >

                            <h4>About Timothy...</h4>
                            <p>I love Barro's pizza and playing Gears. Let's be internet BFFs.</p>
                            <div className={ socialMediaContainer }  >

                                <SvgIconSocial
                                    icon={<FacebookIcon/>}
                                    link={CONTACTS.facebook}
                                    theme={{iconWrapper: socialIconWrapper}}
                                />

                                <SvgIconSocial
                                    icon={<TwitterIcon/>}
                                    link={''}
                                    theme={{iconWrapper: socialIconWrapper}}
                                />

                                <SvgIconSocial
                                    link={CONTACTS.linkedin}
                                    icon={<LinkedInIcon/>}
                                    theme={{iconWrapper: socialIconWrapper}}
                                />

                                <SvgIconSocial
                                    link={''}
                                    icon={<GithubIcon/>}
                                    theme={{iconWrapper: socialIconWrapper}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact