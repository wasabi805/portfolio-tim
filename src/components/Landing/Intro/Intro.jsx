import React from 'react';
import { cx } from 'emotion';
import { sectionStyle , sectionPaddingBottom} from '../../Common/Section/SectionContainer.styles';
import { IntroContext } from './Intro.styles';


const Intro = ()=>{
    return(
        <section className={cx(sectionStyle , sectionPaddingBottom)}>
               <div className={ IntroContext } >
                   <h4 > Intro :
                       When the la-la hits ya lyrics just splits ya
                       Head so hard, that your hat can't fit you
                       Either I'm with ya or against ya
                       Format venture, back through that maze I sent ya
                       Talking to the rap inventor
                       Ninja with the game tight, fifth of that flame right
                       Spell my name right, B-I, double-G, I-E
                       Iced out, lights out, me and Cease-a-Leo</h4>
               </div>
        </section>
    )
}

export default Intro