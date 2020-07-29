import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Mixes from "./Mixes";
import mixesSelectors from '../../../store/Mixes/Mixes.selector';
import mixesActions from '../../../store/Mixes/Mixes.actions'

const MixesContainer = ()=>{
    const [xx ,setX] = useState()

    useEffect( ()=>{
        mixesActions.fetchTrackListing();
    }, [])

    const trackListing = useSelector(
        state => mixesSelectors.mixes.data(state).trackList)

    useEffect(()=>{
        if(trackListing.length > 0 ){
            setX( trackListing )
        }

    }, [ trackListing ])

    console.log('xx', xx , '*******')

    return(
        <Mixes
            trackListing={ trackListing }
            xx={xx}
        />
    )
}

export default MixesContainer