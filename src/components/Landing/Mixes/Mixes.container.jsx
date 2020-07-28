import React from 'react';
import { useSelector } from 'react-redux';
import Mixes from "./Mixes";
import mixesSelectors from '../../../store/Mixes/Mixes.selector';

const MixesContainer = ()=>{

    const trackListing = useSelector(
        state => mixesSelectors.mixes.data(state).trackList)

    return(
        <Mixes trackListing={ trackListing } />
    )
}

export default MixesContainer