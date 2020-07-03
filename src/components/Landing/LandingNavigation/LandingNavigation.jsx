import React from 'react';
import { LandingNavigationSection } from "./LandingNavigation.styles";

const LandingNavigation = ({sections})=>{
    return(
        <nav className={ LandingNavigationSection }>
            {sections.map(sec => (
                <a href="">{sec}</a>
            ))}
        </nav>
    )
}
export default LandingNavigation