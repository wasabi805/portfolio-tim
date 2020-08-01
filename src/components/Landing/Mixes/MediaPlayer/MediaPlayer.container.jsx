import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MediaPlayer from './MediaPlayer';

const MediaPlayerContainer = ({ trackListing })=>{
    const initialTrack = {
        artist: "Tinashe ft Schoolboy Q",
        endTime: "213",
        id: "01",
        img: "https://i.ibb.co/VxVcr1h/Tinashe-2-On-608x608.jpg",
        startTime: "0",
        title: "2 On"
    }

    /** Calculates width for loaded audio file specific to loaded song  */
    const [loadedTrack , setLoadedTrack] = useState({timelineWidth: null});

    const [currentTrack, setCurrentTrack] = useState( initialTrack )

    const handlePlay =( node )=> (node && node.paused ? node.play() : node.pause());

    /**Time Conversion*/
    const getMinutes = (e)=>("0" + Math.floor(e.target.currentTime / 60))
    const getSeconds= (e, minutes)=>(
        parseInt((Math.floor(e.target.currentTime) - minutes * 60), 10)
    );

    const switchImage = ( seconds ) => {
        const jumpToTrack = trackListing.find(
            song => (
                seconds >= song.startTime &&
                seconds <= song.endTime
            ))

        if(currentTrack !== jumpToTrack ){
            setCurrentTrack(jumpToTrack || {})
        }

        // console.log(seconds, 'seconds')
    }

    /**Elapsed Time Bar*/
    /**
     * @function{ getTimeUpdate } : Paints the elapsedTime bar as song progresses.
     * @param e : event
     * @param musicNode : audioFile
     * @param playHeadNode : sliderHandle
     * @param elapsedTimeNode :
     */
    const getTimeUpdate = (
        e ,
        musicNode ,
        playHeadNode ,
        elapsedTimeNode )=>
    {
        if(musicNode, playHeadNode, elapsedTimeNode){
            const playPercent = loadedTrack.timelineWidth * (musicNode.currentTime / musicNode.duration);
            playHeadNode.style.marginLeft = playPercent + "px";

            const calculatedMinutes = getMinutes(e)
            const seconds = getSeconds(e, calculatedMinutes);
            const calcSeconds = seconds < 10 ? "0" + seconds : seconds

            /**Display TrackImage*/
            switchImage( musicNode.currentTime )

            /** Display Time*/
            elapsedTimeNode.innerHTML= `${calculatedMinutes}:${calcSeconds }`
        }
    };

    const getPosition =( el )=> {
        return el.getBoundingClientRect().left;
    }
    /** PART A.) Drag playHead to selected time on track (Part B is in MediaPlayer.js)*/
    /** Note: Makes playHead moveable by user, DOES NOT SET THE POSITION see Part B*/
    const setMovePlayHead = (e , timeLineNode , playHeadNode)=>{
        const newMargLeft = e.clientX - getPosition(timeLineNode);

        if (newMargLeft >= 0 && newMargLeft <= loadedTrack.timelineWidth) {
            playHeadNode.style.marginLeft = newMargLeft + "px";
        }
        if (newMargLeft < 0) {
            playHeadNode.style.marginLeft = "0px";
        }
        if (newMargLeft > loadedTrack.timelineWidth) {
            playHeadNode.style.marginLeft = loadedTrack.timelineWidth + "px";
        }
    }

    const clickPercent = ( event, timeLineNode )=> (
        ( event.clientX - getPosition( timeLineNode )) / loadedTrack.timelineWidth);

    return(
        <MediaPlayer
            handlePlay={handlePlay}
            getTimeUpdate={getTimeUpdate}
            loadedTrack={loadedTrack}
            setMovePlayHead={setMovePlayHead}
            clickPercent={clickPercent}
            trackListing={ trackListing }
            switchImage={ switchImage }
            currentTrack={currentTrack}
        />
    )
}

MediaPlayerContainer.propTypes={
    trackListing: PropTypes.arrayOf(
        PropTypes.shape({
            artist: PropTypes.string,
            endTime: PropTypes.string,
            id: PropTypes.string,
            img: PropTypes.string,
            startTime: PropTypes.string,
            title: PropTypes.string,
        })
    ).isRequired
}

export default MediaPlayerContainer