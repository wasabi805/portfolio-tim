import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { sectionStyle , sectionPaddingSides } from '../../Common/Section/SectionContainer.styles';
import { mixesWrapper } from './Mixes.styles';
import MediaPlayer from "./MediaPlayer";

const Mixes = ({ trackListing, initialTrackImage })=>{
    return(
        <section id="mixes-section" className={ cx( sectionStyle , sectionPaddingSides) }>
            <h2>Mixes</h2>
            <div className={ mixesWrapper }>


            </div>
            <MediaPlayer
                trackListing={ trackListing }
                initialTrackImage={ initialTrackImage }
            />
        </section>
    )
}

Mixes.propTypes={
    trackListing: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            artist: PropTypes.string,
            startTime: PropTypes.string,
            endTime: PropTypes.string,
            img: PropTypes.string,
        }).isRequired
    ),

    loadInitialTrack: PropTypes.func.isRequired,
}

export default Mixes