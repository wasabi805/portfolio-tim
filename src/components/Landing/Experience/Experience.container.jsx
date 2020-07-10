import React from 'react';
import { useSelector } from 'react-redux';
import Experience from './Experience';
import experienceSelectors from '../../../store/Experience/Experience.Selectors';

const ExperienceContainer =()=>{
    const slides = useSelector(state =>
        experienceSelectors.experience.data(state).slides)

    return(
        <Experience
            slides={ slides }
        />
    )
}

export default ExperienceContainer