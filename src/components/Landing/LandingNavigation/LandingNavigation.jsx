import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LandingNavigationSection } from './LandingNavigation.styles';

const LandingNavigation = ({ sections })=>{

    const [activeLink , setActiveLink] = useState();
    const animateLink = (sec)=>{
        console.log(sec)
        if(sec){
            setActiveLink( sec )
        }
    };

    const stopAnimation = ()=>{
        setActiveLink(null)
    };


    const scrollToRef = ( elemId ) => document.getElementById( elemId ).scrollIntoView({behavior: 'smooth'})

    return(
        <nav className={ LandingNavigationSection }>
            {sections && sections.map(sec => {
                return(
                   <div >
                       <button  key={`link-${sec}`}
                               onClick={()=>scrollToRef(`${sec}-section`)}
                       >
                           <p className={(sec === activeLink && 'glitch')}
                              data-text={ sec }
                              onMouseOver={()=>animateLink(sec)}
                              onMouseOut={ stopAnimation }
                           >
                               {sec}
                           </p>
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