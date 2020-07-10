import {css} from 'emotion';
import AllState from "../../../images/Allstate.png";

export const allStateImg = ( img )=>{
    console.log(img, 'what is img')
    return css({
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat' ,
        position: 'relative',
        display: 'block',
        width: '10vw',
        height: '30vh',
        backgroundSize: 'contain',
        zIndex: 100,
    })
}

export const experienceWrapper = css({
    position: 'relative',
});