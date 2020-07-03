import React from 'react';
import {
    heroStyles,
    line01,
    line02,
    soundWaveContainer, subLine01, subLine02,
    subLineWrapper,
    titleContainer,
    titleWrapper
} from "../Home/Home.styles";
import {ReactComponent as SoundWaveSvg} from "../../../svg/Sound-Wave.svg";
import {ReactComponent as OptimusSvg} from "../../../svg/iconfinder_Transformers_Autobot_Decepticon_movie_cartoon_game_11_6176941.svg";
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

                    {/*<div className={subLineWrapper}>*/}
                    {/*    <span className={subLine02}>*/}
                    {/*        <OptimusSvg />*/}
                    {/*    </span>*/}
                    {/*    <span className={subLine01}>*/}
                    {/*        <p>'UI FrontEnd Developer'</p>*/}
                    {/*    </span>*/}
                    {/*</div>*/}

                </div>
            </div>
        </section>
    )
}

export default Hero