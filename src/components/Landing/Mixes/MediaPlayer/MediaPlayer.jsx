import { cx } from 'emotion';
import React, { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import animeGirl from '../../../../images/thumb/animeGirl-600x600.jpg'
import {
    mediaPlayerWrapper ,
    trackInfoContainer,
    timeline,
    playHead,
    pButton,
    getTrackImage,
    audioPlayer,
    elapsedTime,
    timeDisplay,

} from './MediaPlayer.styles';
import {addListener, removeListener} from "../../../../helpers/listeners";
import {ReactComponent as PlayButtonSvg } from'../../../../svg/multimedia.svg'

import {media} from "../../../../enums/media";
// import

const MediaPlayer = ({
    handlePlay,
    getTimeUpdate,
    loadedTrack,
    setMovePlayHead,
    clickPercent,
                         trackListing,
                         switchImage,

                         currentTrack
})=>{
    const musicNodeRef = useRef();
    const pButtonNodeRef = useRef();
    const playHeadNodeRef = useRef();
    const timeLineNodeRef = useRef();
    const timeDisplayNodeRef = useRef();

    const [musicNode, setMusicNode] = useState(null);
    const [pButtonNode , setPButtonNode] = useState(null)
    const [playHeadNode ,setPlayHeadNode] = useState(null);
    const [timeLineNode, setTimeLineNode] = useState(null);
    const [elapsedTimeNode , setElapsedTimeNode] = useState(null);

    const isLaptop = useMediaQuery({ query: media.LAPTOP })

    //assigns the dom elements on mount
    useEffect(()=>{
        setMusicNode(musicNodeRef.current)
        setPButtonNode(pButtonNodeRef.current)
        setPlayHeadNode(playHeadNodeRef.current)
        setTimeLineNode(timeLineNodeRef.current)
        setElapsedTimeNode(timeDisplayNodeRef.current)
    },[musicNode ,pButtonNode , playHeadNode,timeLineNode, elapsedTimeNode])

    const play =()=> handlePlay(musicNode)
    const timeUpdate = (e)=> getTimeUpdate(e , musicNode , playHeadNode ,elapsedTimeNode)
    const movePlayHead =( e )=> setMovePlayHead( e , timeLineNode , playHeadNode )

    // Once the dom nodes are mounted...
    if(timeLineNode && playHeadNode){
        let onPlayHead = false /** Tracks onMouseUp & onMouseDown for elapsed time bar slider*/

        // mouseDown EventListener
        function mouseDown() {
            onPlayHead = true
            window.addEventListener('mousemove', movePlayHead, true);
            removeListener(musicNode,'timeupdate', timeUpdate, false);
        }

        // gets input from all mouse clicks
        const mouseUp =( event )=> {

            switchImage( musicNode.currentTime )

            if (onPlayHead == true) {
                movePlayHead(event);
                window.removeEventListener('mousemove', movePlayHead, true);

                // convert duration into current time
                musicNode.currentTime = musicNode.duration * clickPercent(event , timeLineNode);
                addListener(musicNode , 'timeupdate', timeUpdate , false)
            }
            onPlayHead = false;
        }

        //defines the width of the timeline
        loadedTrack.timelineWidth = timeLineNode.offsetWidth - playHeadNode.offsetWidth

        //makes playHead draggable
        addListener(playHeadNode , 'mousedown' , mouseDown , false)
        addListener(window,'mouseup', mouseUp, false);

        //PART B.) Drag playhead to selected time on track ------------
        //Note: This is the part that connects moving the playHead to represent
        //  the elapsed track time.
        addListener(timeLineNode, 'click',(e)=> {
            const { duration} = musicNode
            movePlayHead(e);
            musicNode.currentTime = duration * clickPercent(e, timeLineNode);
        }, false )
        //-------------------------------------------------------------
    }

    //adds listener once these two are mounted
    pButtonNode && addListener(pButtonNode , 'click', ()=>play);
    musicNode && musicNode.addEventListener('timeupdate', timeUpdate, false);

    // const imgOrObj = ( currentTrack.img !== 'animeGirl' ? currentTrack.img : '' )
    return(
        <div className={ mediaPlayerWrapper } style={{border: '1px solid cyan'}}>
            <audio id="music" ref={ musicNodeRef }>
                <source src={'./June2020_portfolioMix.mp3'} type={'audio/mp3'}/>
            </audio>
            <div id="track-info-container" className={ trackInfoContainer }>
               <div style={
                   {display : 'flex' ,  border : '1px solid lime', }
               }>
                   <div id={'track-img-delete-when-done'} className={getTrackImage()}
                        style={
                            {flex: 1}
                        }
                   >

                       {/*<img src={imgOrObj}/>*/}
                        <img src={ currentTrack.img }/>

                   </div>

                   {}

                   {isLaptop && (
                       <div style={
                           {background : '#00ffff4a' , flex: '1' , display: 'flex'}
                       }>
                           <ul style={{
                               position: 'absolute',
                               fontSize: '1vw',
                               top: '0',
                               bottom: '70px',
                               fontFamily: 'D-DINCondensed',
                               listStyleType: 'none',
                               overflow: 'auto',
                           }}>
                               {trackListing &&  trackListing.map( track => (
                                   <li>{track.id} - {track.artist} | {track.title} </li>
                               ) )}
                           </ul>
                       </div>
                   )}

               </div>

                <div id="audioplayer" className={ audioPlayer }>
                    <button
                        ref={pButtonNodeRef}
                        id="pButton"
                        className={cx('play' , pButton)}
                        onClick={play}
                    >
                        <PlayButtonSvg/>
                    </button>

                    <div id="elapsedTime" className={ elapsedTime }>
                        <p className={ timeDisplay } ref={ timeDisplayNodeRef }>
                            00:00
                        </p>

                    </div>
                    <div id="timeline" ref={ timeLineNodeRef } className={ timeline }>
                        <div id="playhead" ref={ playHeadNodeRef } className={ playHead }/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default MediaPlayer