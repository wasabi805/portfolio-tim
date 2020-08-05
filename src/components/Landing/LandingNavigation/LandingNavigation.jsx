import React from 'react';
import PropTypes from 'prop-types';
import { LandingNavigationSection } from './LandingNavigation.styles';

const LandingNavigation = ({ sections })=>{

    const scrollToRef = ( elemId ) => document.getElementById( elemId ).scrollIntoView({behavior: 'smooth'})

    return(
        <nav className={ LandingNavigationSection }>
            {sections && sections.map(sec => {
                return(
                   <div >
                       <button key={`link-${sec}`}
                               onClick={()=>scrollToRef(`${sec}-section`)}
                       >
                           <p>{sec}</p>
                       </button>
                   </div>
                )
            })}
        </nav>
    )
}

LandingNavigation.propTypes={
    sections: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default LandingNavigation