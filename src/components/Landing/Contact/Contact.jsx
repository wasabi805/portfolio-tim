import React from 'react';
import { cx } from 'emotion';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { sectionTitle , contactSection, iconWrapper , icon } from './Contact.styles';
import {ReactComponent as PhoneSvg} from '../../../svg/phone.svg';
import {ReactComponent as Email} from '../../../svg/emails.svg';
import {ReactComponent as LinkedIn} from '../../../svg/linkedin.svg';
import {ReactComponent as Website} from '../../../svg/web.svg';

const Contact = ()=>{
    return(
        <section id="contact-section" className={cx(sectionStyle , contactSection)}>
            <h2 className={sectionTitle}> Contact </h2>

            <div className={iconWrapper}>
                <span className={icon}>
                   <span > <PhoneSvg/></span>
                    <small>650.464.9906</small>
                </span>

                <span className={icon}>
                    <Email/>
                    <small>timothy.j.ocampo@gmail.com</small>
                </span>

                <span className={icon}>
                    <LinkedIn style={{marginBottom: '20px'}} />
                    <small>linkedin.com/in/timocampo</small>
                </span>

                <span className={icon}>
                    <Website/>
                    <small>www.proletdev.com</small>
                </span>
            </div>
        </section>
    )
}

export default Contact