import React from 'react';
import { useSelector } from "react-redux";
import Skills from './Skills';
import selectors from '../../../store/Skills/Skills.selector';

const SkillsContainer = ()=>{

    const cards = useSelector( state =>(
        selectors.cards(state)
    ))

    return(
       <Skills
           cards={cards}
       />
    )
}

export default SkillsContainer