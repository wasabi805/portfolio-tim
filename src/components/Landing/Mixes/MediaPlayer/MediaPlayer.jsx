import {cx} from 'emotion';
import React, {useEffect, useState, useRef , useLayoutEffect } from 'react';
import { mediaPlayerWrapper , playButton, mediaButton ,timeline,playHead ,pButton} from './MediaPlayer.styles';
import {ReactComponent as PlaySvg} from '../../../../svg/009-play.svg';
import {ReactComponent as StopSvg} from '../../../../svg/017-stop.svg';
import {ReactComponent as ForwardSvg} from '../../../../svg/007-next.svg';
import {ReactComponent as ReverseSvg} from '../../../../svg/010-previous.svg';

import Chance from '../../../../images/thumb/chance.png'

const MediaPlayer = ()=>{

    const [musicNode, setMusicNode] = useState(null)
    const [pButtonNode , setPButtonNode] = useState(null)
    const [playHeadNode ,setPlayHeadNode] = useState(null);
    const [timeLineNode, setTimeLineNode] = useState(null)
    const [elapsedTimeNode , setElapsedTimeNode] = useState(null)

    //assigns the dom elements on mount
    useEffect(()=>{
        setMusicNode(document.getElementById('music'))
        setPButtonNode(document.getElementById('pButton'))
        setPlayHeadNode(document.getElementById('playhead'))
        setTimeLineNode(document.getElementById('timeline'))
        setElapsedTimeNode(document.getElementById('elapsedTime'))
    },[])

    //operates the play button
    const play = ()=>{
        if(musicNode.paused){
            musicNode.play()
        }else{
            musicNode.pause()
        }
    }

    //updates the progress bar with elapsed time
    const timeUpdate=(e)=>{
        const playPercent = stuff.timelineWidth * (musicNode.currentTime / musicNode.duration);
        playHeadNode.style.marginLeft = playPercent + "px";

        const minutes = "0" + Math.floor(e.target.currentTime / 60);
        const getSeconds = parseInt((Math.floor(e.target.currentTime) - minutes * 60), 10);

        const seconds = getSeconds < 10 ?
            "0" + getSeconds : getSeconds

        elapsedTimeNode.innerHTML= `${minutes}:${seconds }`
    }

    const getPosition =( el )=> {
        return el.getBoundingClientRect().left;
    }

    //PART A.) Drag playhead to selected time on track
    // Note: makes playhead moveable by user, DOES NOT SET THE POSITION see Part B
    const movePlayHead = (e)=>{
        console.log(e)
        const newMargLeft = e.clientX - getPosition(timeLineNode);

        if (newMargLeft >= 0 && newMargLeft <= stuff.timelineWidth) {
            playHeadNode.style.marginLeft = newMargLeft + "px";
        }
        if (newMargLeft < 0) {
            playHeadNode.style.marginLeft = "0px";
        }
        if (newMargLeft > stuff.timelineWidth) {
            playHeadNode.style.marginLeft = stuff.timelineWidth + "px";
        }
    }

    // holds vars once music dom elements mount
    const stuff={
        onplayhead : false, // Boolean value so that audio position is updated only when the playhead is released
        minutes: null,
        seconds: null,
    }

    // Once the dom nodes are mounted...
    if(timeLineNode && playHeadNode){
        // mouseDown EventListener
        function mouseDown() {
            stuff.onplayhead = true;
            window.addEventListener('mousemove', movePlayHead, true);
            musicNode.removeEventListener('timeupdate', timeUpdate, false);
        }
        // mouseUp EventListener
        // getting input from all mouse clicks
        const mouseUp =(event)=> {
            if (stuff.onplayhead == true) {
                movePlayHead(event);
                window.removeEventListener('mousemove', movePlayHead, true);
                // change current time
                musicNode.currentTime = musicNode.duration * clickPercent(event);
                musicNode.addEventListener('timeupdate', timeUpdate, false);
            }
            stuff.onplayhead = false;
        }

        //defines the width of the timeline
        stuff.timelineWidth = timeLineNode.offsetWidth - playHeadNode.offsetWidth

        //makes playhead draggable
        playHeadNode.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);

        //PART B.) Drag playhead to selected time on track ------------
        //Note: This is the part that connects moving the playhead to represent
        //  the elapsed track time.
        timeLineNode.addEventListener("click", function(e) {
            movePlayHead(e);
            musicNode.currentTime = musicNode.duration * clickPercent(e);
        }, false);

        function clickPercent(event) {
            return (event.clientX - getPosition(timeLineNode)) / stuff.timelineWidth;
        }
        //-------------------------------------------------------------

    }
    if(pButtonNode){
        pButtonNode.addEventListener("click", ()=>play())
    }

    if(musicNode){
        musicNode.addEventListener("timeupdate", timeUpdate, false);
    }

    console.log(stuff , 'stuff')

    return(
        <div className={mediaPlayerWrapper}
             style={{border: '1px solid cyan'}}
        >
            <div style={{
                border: '1px solid red',

            }}>

                <div id={'track-img'}
                     style={{display: 'block',
                         height: '500px' ,
                         width: '500px',
                         textAlign: 'center',
                         backgroundImage: `url(${Chance})`,
                         backgroundRepeat:'no-repeat',
                     }}>
                </div>

                <div style={{float: 'right'}}>
                    Chance the Rapper
                </div>

                <div id={'elapsedTime'}></div>
            </div>

            <audio id={'music'}  >
                <source src={'./04-Hot-Shower.mp3'} type={'audio/mp3'}/>
            </audio>

            <div id="audioplayer" style={{
                width: '480px',
                height: '60px',
                margin: '50px auto auto auto',
                border: 'solid',
            }}>
                <button id="pButton" className={cx('play' , pButton)} onClick={play}>play</button>
                <div id="timeline" className={timeline}>
                    <div id="playhead" className={playHead}></div>
                </div>
            </div>


            {/*<div id="media-controls"*/}
            {/*     style={{*/}
            {/*         display: 'inline-flex' ,*/}
            {/*         position: 'relative',*/}
            {/*         border: '1px solid yellow',*/}
            {/*         justifyContent: 'center'*/}
            {/*     }}>*/}
            {/*    <span className={playButton} onClick={()=>start()}>*/}
            {/*        <PlaySvg/>*/}
            {/*    </span>*/}
            {/*    <span className={mediaButton}>*/}
            {/*        <ReverseSvg/>*/}
            {/*    </span>*/}
            {/*    <span className={mediaButton} onClick={()=>pause()}>*/}
            {/*        <StopSvg/>*/}
            {/*    </span>*/}
            {/*    <span className={mediaButton}>*/}
            {/*        <ForwardSvg onClick={()=>move()} />*/}
            {/*    </span>*/}
            {/*</div>*/}

        </div>
    )
}
export default MediaPlayer