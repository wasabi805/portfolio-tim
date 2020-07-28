import React, { useCallback, useState} from 'react';
import MediaPlayer from './MediaPlayer';

const MediaPlayerContainer = ( {trackListing } )=>{

    const [loadedTrack , setLoadedTrack] = useState(
        {timelineWidth: null,    /** Calculated width for loaded audio file specific to loaded song  */
        });



    /**Button Controls*/
    const handlePlay =( node )=> (node && node.paused ? node.play() : node.pause());

    /**Time Conversion*/
    const getMinutes = (e)=>("0" + Math.floor(e.target.currentTime / 60))
    const getSeconds= (e, minutes)=>(
        parseInt((Math.floor(e.target.currentTime) - minutes * 60), 10)
    );

    const [currentTrack , setCurrentTrack] = useState(trackListing[0])

    const switchImage = ( seconds ) => {

        const jumpToTrack = trackListing.find(
            song => (
                seconds >= song.startTime &&
                seconds <= song.endTime
            ))

        if(currentTrack !== jumpToTrack ){
            setCurrentTrack(jumpToTrack || {})
        }

        console.log(jumpToTrack)

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

            //Display TrackImage
            switchImage( musicNode.currentTime )

            console.log(musicNode.currentTime)
            //Display Time
            elapsedTimeNode.innerHTML= `${calculatedMinutes}:${calcSeconds }`
        }
    };


    const getPosition =( el )=> {
        return el.getBoundingClientRect().left;
    }
    //PART A.) Drag playHead to selected time on track
    // Note: makes playHead moveable by user, DOES NOT SET THE POSITION see Part B
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

    function clickPercent(event ,timeLineNode) {
        return (event.clientX - getPosition(timeLineNode)) / loadedTrack.timelineWidth;
    }

    return(
        <MediaPlayer
            getMinutes={getMinutes}
            getSeconds={getSeconds}
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

export default MediaPlayerContainer