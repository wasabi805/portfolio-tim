import React from 'react';
import { Sample } from "./Sample.styles";
import {subLine01, subLine02, subLineWrapper} from "../Home/Home.styles";
import {ReactComponent as OptimusSvg} from "../../../svg/iconfinder_Transformers_Autobot_Decepticon_movie_cartoon_game_11_6176941.svg";

const Samples = ()=>{
    return(
        <section id="samples" className={ Sample }>
            <div className={subLineWrapper}>
                        <span className={subLine02}>
                            <OptimusSvg />
                        </span>
                <span className={subLine01}>
                            <p>'UI FrontEnd Developer'</p>
                        </span>
            </div>
            {/*<svg height="500" width="500">*/}
            {/*    <circle cx="300" cy="220" r="200" stroke="white" stroke-width="3"  />*/}
            {/*</svg>*/}
        </section>
    )
}

export default Samples
