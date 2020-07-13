import { cx } from 'emotion';
import React, { useEffect, useState, useRef } from 'react';
import {
    mediaPlayerWrapper ,
    timeline,
    playHead,
    pButton,
    getTrackImage,
    audioPlayer} from './MediaPlayer.styles';
import {ReactComponent as PlaySvg} from '../../../../svg/009-play.svg';
import {addListener, removeListener} from "../../../../helpers/listeners";
import {ReactComponent as PlayButtonSvg } from'../../../../svg/multimedia.svg'

import Chance from '../../../../images/thumb/chance.png'

const MediaPlayer = ({
    handlePlay,
    getTimeUpdate,
    loadedTrack,
    setMovePlayHead,
    clickPercent
})=>{
    const musicNodeRef = useRef();
    const pButtonNodeRef = useRef();
    const playHeadNodeRef = useRef();
    const timeLineNodeRef = useRef();
    const elapsedTimeNodeRef = useRef();

    const [musicNode, setMusicNode] = useState(null)
    const [pButtonNode , setPButtonNode] = useState(null)
    const [playHeadNode ,setPlayHeadNode] = useState(null);
    const [timeLineNode, setTimeLineNode] = useState(null)
    const [elapsedTimeNode , setElapsedTimeNode] = useState(null)

    //assigns the dom elements on mount
    useEffect(()=>{
        setMusicNode(musicNodeRef.current)
        setPButtonNode(pButtonNodeRef.current)
        setPlayHeadNode(playHeadNodeRef.current)
        setTimeLineNode(timeLineNodeRef.current)
        setElapsedTimeNode(elapsedTimeNodeRef.current)
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

    return(
        <div className={mediaPlayerWrapper}>
            <div id="track-info-container" style={{border: '3px solid white' , width: '50vw'}}>
                <div className={getTrackImage(Chance)}/>

                <audio id={'music'} ref={musicNodeRef}>
                    <source src={'./04-Hot-Shower.mp3'} type={'audio/mp3'}/>
                </audio>

                <div id="audioplayer" className={audioPlayer}>
                    <button
                        ref={pButtonNodeRef}
                        id="pButton"
                        className={cx('play' , pButton)}
                        onClick={play}
                    >
                        {/*<PlaySvg/>*/}
                        <PlayButtonSvg/>
                    </button>

                    <div
                        id={'elapsedTime'}
                        style={{
                            width : '100px',
                            display: 'block',
                            textAlign : 'center'
                        }}
                    >
                        <p style={{marginTop: '20px'}} ref={elapsedTimeNodeRef}>00:00</p></div>

                    <div id="timeline" ref={timeLineNodeRef} className={timeline}>
                        <div id="playhead" ref={playHeadNodeRef} className={playHead}/>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default MediaPlayer