import { cx } from 'emotion';
import React, { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { mediaPlayerWrapper, contextContainer, context, timeline, playHead, pButton,
    contextText, playlist, contextImage, audioPlayer, elapsedTime,
    timeDisplay } from './MediaPlayer.styles';
import {addListener, removeListener} from "../../../../helpers/listeners";
import {ReactComponent as PlayButtonSvg } from'../../../../svg/multimedia.svg'
import {media} from "../../../../enums/media";

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

        /** gets input from all mouse clicks*/
        const mouseDown = () => {
            onPlayHead = true
            window.addEventListener('mousemove', movePlayHead, true);
            removeListener(musicNode,'timeupdate', timeUpdate, false);
        }
        const mouseUp =( event )=> {
            switchImage( musicNode.currentTime )

            if (onPlayHead == true) {
                movePlayHead(event);
                window.removeEventListener('mousemove', movePlayHead, true);
                musicNode.currentTime = musicNode.duration * clickPercent(event , timeLineNode);  // convert duration into current time
                addListener(musicNode , 'timeupdate', timeUpdate , false)
            }
            onPlayHead = false;
        }

        /** defines the width of the timeline*/
        loadedTrack.timelineWidth = timeLineNode.offsetWidth - playHeadNode.offsetWidth
        addListener(playHeadNode , 'mousedown' , mouseDown , false) //makes playHead draggable
        addListener(window,'mouseup', mouseUp, false);

        /** Part B Drag playhead to selected time on track ( Part A is in MediaPlayerContainer.js ) */
        /** Note: This allows the playHead to represent position on the elapsed track time line when dragged*/
        addListener(timeLineNode, 'click',(e)=> {
            const { duration} = musicNode
            movePlayHead(e);
            musicNode.currentTime = duration * clickPercent(e, timeLineNode);
        }, false )
        //-------------------------------------------------------------
    }

    /** adds listener once these two are mounted*/
    pButtonNode && addListener(pButtonNode , 'click', ()=> play );
    musicNode && musicNode.addEventListener('timeupdate', timeUpdate, false);

    return(
        <div className={ mediaPlayerWrapper }>
            <audio id="music" ref={ musicNodeRef }>
                <source src={'https://proletdev.s3-us-west-1.amazonaws.com/June2020_portfolioMix+copy.mp3'} type={'audio/mp3'}/>
                {/*<source src={'./June2020_portfolioMix.mp3'} type={'audio/mp3'}/>*/}
            </audio>

            <div className={ contextContainer }>
               <div className={ context }>
                   <div className={ contextImage }>
                        <img src={ currentTrack.img }/>
                   </div>

                   {isLaptop && (
                       <div className={ contextText }>
                           <ul className={ playlist }>
                               {trackListing && trackListing.map( track => (
                                   <li key={`track-${track.id}`} >{track.id} - {track.artist} | {track.title} </li>
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
                        data-text="play"
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