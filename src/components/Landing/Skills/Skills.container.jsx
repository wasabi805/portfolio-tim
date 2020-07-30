import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import Skills from './Skills';
import selectors from '../../../store/Skills/Skills.selector';
import actions from '../../../store/Skills/Skills.actions';

const SkillsContainer = ()=>{
    useEffect(()=>{
        actions.fetchSkillsList()
    },[])

    const cards = useSelector( state =>{
        return selectors.skills.list(state).cards
    })

    return(
       <Skills
           cards={cards}
       />
    )
}

export default SkillsContainer