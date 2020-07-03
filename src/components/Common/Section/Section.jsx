import React from "react";
import {sectionStyle} from "./SectionContainer.styles";

const Section = ({children})=>{
    return(
        <section className={ sectionStyle }>
            { children }
        </section>
    )
}

export default Section