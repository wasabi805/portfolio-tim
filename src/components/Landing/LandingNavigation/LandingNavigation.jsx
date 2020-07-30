import React from 'react';
import PropTypes from 'prop-types';
import { LandingNavigationSection } from './LandingNavigation.styles';

const LandingNavigation = ({ sections })=>{
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    return(
        <nav className={ LandingNavigationSection }>
            {sections.map(sec => (
                <a key={`link-${sec}`} href="" onClick={ ()=>scrollToRef() }>{sec}</a>
            ))}
        </nav>
    )
}

LandingNavigation.propTypes={
    sections: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default LandingNavigation