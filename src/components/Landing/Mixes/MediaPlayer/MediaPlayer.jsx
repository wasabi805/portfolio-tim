import React, {useEffect, useState, useRef , useEventListener} from 'react';
import { mediaPlayerWrapper , playButton, mediaButton } from './MediaPlayer.styles';
import {ReactComponent as PlaySvg} from '../../../../svg/009-play.svg';
import {ReactComponent as StopSvg} from '../../../../svg/017-stop.svg';
import {ReactComponent as ForwardSvg} from '../../../../svg/007-next.svg';
import {ReactComponent as ReverseSvg} from '../../../../svg/010-previous.svg';

import Chance from '../../../../images/thumb/chance.png'

const MediaPlayer = ()=>{
    let track = new Audio("./04-Hot-Shower.mp3")
    const [progressBar , setProgressBarRef] = useState(null)
    const [tracker , setTracker] = useState(null)
    const [currentTime , setCurrentTime] = useState(0)

    const start = ()=>{track.play()}
    const pause = ()=>{track.pause()}
    const move = (time )=>{alert('might work')}

    const elapsedTrackTimeRange = useRef()




    useEffect(()=>{
        //Elapsed Time
        const tracker = document.getElementById('elapsed_time')


        tracker.addEventListener('mousedown' , (e)=>{
            let clickedPosition = e.clientX - e.target.offsetLeft
            track.currentTime = (clickedPosition /e.target.offsetWidth) * track.duration


        }, false);

    },[])

    console.log(tracker , 'what is tracker')
    //


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
            </div>

            <div className="currentTime" style={{color: 'white'}} >1:16</div>
            <div className="durationTime" ></div>
            <input
                id="elapsed_time"
                ref={elapsedTrackTimeRange}
                type="range"
                min="0"
                max=""
                value="50"
                onChange={()=>console.log('g')}
            />


            <div id="media-controls"
                 style={{
                     display: 'inline-flex' ,
                     position: 'relative',
                     border: '1px solid yellow',
                     justifyContent: 'center'
                 }}>
                <span className={playButton} onClick={()=>start()}>
                    <PlaySvg/>
                </span>
                <span className={mediaButton}>
                    <ReverseSvg/>
                </span>
                <span className={mediaButton} onClick={()=>pause()}>
                    <StopSvg/>
                </span>
                <span className={mediaButton}>
                    <ForwardSvg onClick={()=>move()} />
                </span>
            </div>

        </div>
    )
}
export default MediaPlayer