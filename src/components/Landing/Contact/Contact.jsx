import React from 'react';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { sectionTitle } from './Contact.styles';
import {ReactComponent as PhoneSvg} from '../../../svg/phone.svg';
import {ReactComponent as Email} from '../../../svg/emails.svg';
import {ReactComponent as LinkedIn} from '../../../svg/linkedin.svg';
import {ReactComponent as Website} from '../../../svg/web.svg';

const test = {
    position: 'relative',
    padding : '0 3rem',
    display: 'block',
    margin: '0 10px'
}

const Contact = ()=>{
    return(
        <section id="contact-section" className={sectionStyle}
                 style={{
                     position: 'relative',
                     textAlign: 'center'
                 }}>
            <h2 className={sectionTitle}> Contact </h2>

            <div style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                padding: '3rem 0'
            }}>
            <span style={test}>
               <span > <PhoneSvg/></span>
                <small>650.464.9906</small>
            </span>

            <span style={test}>
                <Email/>
                <small>timothy.j.ocampo@gmail.com</small>
            </span>

            <span style={test}>
                <LinkedIn style={{marginBottom: '20px'}} />
                <small>linkedin.com/in/timocampo</small>
            </span>

            <span style={test}>
                <Website/>
                <small>www.proletdev.com</small>
            </span>
            </div>

        </section>
    )
}

export default Contact