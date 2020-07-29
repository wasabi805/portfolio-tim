import React from 'react';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { mixesWrapper } from './Mixes.styles';
import MediaPlayer from "./MediaPlayer";

const Mixes = ({ trackListing, xx })=>{
    return(
        <section id="mixes-section" className={ sectionStyle }>
            <div className={ mixesWrapper }>
                <h2>Mixes</h2>
            </div>
            <MediaPlayer trackListing={ trackListing } xx={xx} />
        </section>
    )
}

export default Mixes