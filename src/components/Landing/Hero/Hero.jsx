import React from 'react';
import {
    heroStyles,
    line01,
    line02,
    soundWaveContainer,
    titleContainer,
    titleWrapper
} from "../Home/Home.styles";
import {ReactComponent as SoundWaveSvg} from "../../../svg/Sound-Wave.svg";
import Samples from "../Samples/Samples";

const Hero = ()=>{
    return(
        <section className={heroStyles}>
            <div className={soundWaveContainer}>
                <SoundWaveSvg/>
            </div>

            <div className={titleContainer}>
                <div className={titleWrapper}>
                    <span className={line01}>
                        Hello
                    </span>
                    <br/>
                    <span className={line02}>
                        It's Tim
                    </span>

                    <Samples/>

                </div>
            </div>
        </section>
    )
}

export default Hero