import React from 'react';
import { sectionStyle } from '../../Common/Section/SectionContainer.styles';
import { mediaQuery } from '../../../media-queries/mediaQueries';
import { useMediaQuery } from 'react-responsive';
import { cx , css } from 'emotion';
import { media } from '../../../enums/media';

const newProjects = ()=>{
    //Projects section
    const newProjectSection = css({
        "& h2": {
            textAlign: 'center'
        }
    });

    // Card styles
    const cardContainer = css({
        position: 'relative',
        display : 'flex',
        flexDirection: 'column',
        border: '1px solid cyan'

    })
    const cardWrapper = css({
        border: '1px dotted orange',
        margin: '2vw 0',

        "h4" :{
            fontSize: '4vw',
            [mediaQuery.Desktop] : {
                fontSize: '1.75vw',
            }
        }
    })




    return(
        <div id="new-projects-section" className={cx(sectionStyle, newProjectSection ) }>
            <h2>Projects</h2>

           <div className={ cardContainer }>
                <div className={ cardWrapper }>
                    <h4
                        // className="glitch" data-text={ 'Dev Connector' }
                    >Dev Connector</h4>
                </div>

               <div className={ cardWrapper }>
                   <h4
                       // className="glitch" data-text={ "Dom's Noms" }
                   >Dom's Noms</h4>
               </div>

               <div className={ cardWrapper }>
                   <h4
                       // className="glitch" data-text={ 'Landing Page' }
                   >Landing Page</h4>
               </div>
           </div>
        </div>
    )
};

export default newProjects