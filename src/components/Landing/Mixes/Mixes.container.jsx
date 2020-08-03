import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Mixes from "./Mixes";
import mixesSelectors from '../../../store/Mixes/Mixes.selector';
import mixesActions from '../../../store/Mixes/Mixes.actions'

const MixesContainer = ()=>{

    const initialTrackImage = useSelector( state => mixesSelectors.mixes.data(state).trackList[0])

    useEffect( ()=>{
        mixesActions.fetchTrackListing();
    }, [])

    const trackListing = useSelector(
        state => mixesSelectors.mixes.data(state).trackList);

    return(
        <Mixes
            trackListing={ trackListing }
            initialTrackImage={ initialTrackImage }
        />
    )
}

export default MixesContainer