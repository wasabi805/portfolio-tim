import React from 'react';
import { cx , css } from 'emotion';
import { sectionStyle } from "../../Common/Section/SectionContainer.styles";
import {mixesWrapper} from "./Mixes.styles";

import MediaPlayer from "./MediaPlayer";

const Mixes = ()=>{
    return(
        <section id="mixes-section" className={cx( sectionStyle , css({border: '1px solid #008b8b38'}))}>
            <div className={mixesWrapper}>
                <h2>Mixes</h2>
            </div>

            <MediaPlayer/>
        </section>
    )
}

export default Mixes