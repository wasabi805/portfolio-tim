import React from 'react';
import { introContainer } from "./Intro.styles";
import {sectionStyle} from "../../Common/Section/SectionContainer.styles";

const Intro = ()=>{
    return(
        <section className={sectionStyle} style={{paddingBottom: '30%'}}>
                <h4> This is section 2
                    I grew up on the crime side, the New York Times side
                    Staying alive was no jive
                    Had second hands, moms bounced on old men
                    So then we moved to Shaolin land
                    A young youth, yo rockin' the gold tooth, 'Lo goose
                    Only way, I begin to G off was drug loot
                    And let's start it like this son, rollin' with…</h4>
        </section>
    )
}

export default Intro