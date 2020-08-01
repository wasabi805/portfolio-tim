import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Mixes from "./Mixes";
import mixesSelectors from '../../../store/Mixes/Mixes.selector';
import mixesActions from '../../../store/Mixes/Mixes.actions'

const MixesContainer = ()=>{
    useEffect( ()=>{
        mixesActions.fetchTrackListing();
    }, [])

    const trackListing = useSelector(
        state => mixesSelectors.mixes.data(state).trackList);

    const initialTrackImage = useSelector( state => mixesSelectors.mixes.data(state).trackList[0])


    return(
        <Mixes
            trackListing={ trackListing }
            initialTrackImage={ initialTrackImage }
        />
    )
}

export default MixesContainer