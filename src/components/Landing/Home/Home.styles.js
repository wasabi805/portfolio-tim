import {css} from 'emotion';
import { mq } from "../../../media-queries/mediaQueries"

export const homeSection = css({
    position: 'relative'
});

export const heroStyles = css({
    background: 'black',
    height: '75vh',
    fontFamily: 'MonumentExtended-Regular',
    color: 'white',

});

export const titleContainer = css({
    display : 'flex',
    flexDirection: 'column' ,
    paddingLeft: '2rem',
    paddingTop: '2rem',
});

export const line01 = css({
    fontSize : '9rem',
});

export const line02 = css({
    fontSize : '7rem',
});

export const subLineWrapper = css({
    position: 'relative',
    width: '92px',
    top: '202px',
    right: '-410px',

    "& p":{
        position: 'absolute',
        fontSize: '28px',
        top: '-18px',
        left: '104px',
    }
});

export const subLine01 = css({
    width: '6vw',
});

export const subLine02 = css({
    position: 'relative',
    width: '6vw',
});

export const titleWrapper = css({
    position: "relative"
});

export const soundWaveContainer= css({
    color: 'white',
    position: 'absolute' ,
    width: '82vw',
    top: '26%',
    left: '20%',
    right: '20%',
    opacity: '0.15',

    [mq.sm]:{
        // top: "500px",
    },

    [mq.md]:{
        top:"200px",
    },
    [mq.lg]:{
        top: "5%",
        width:"96vw",
    }
})
