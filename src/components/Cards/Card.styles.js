import { css } from 'emotion';
import { mediaQuery } from "../../media-queries/mediaQueries";

export const CardContainer = css({
    position: 'relative',
    color: 'white',
    marginTop:'12rem',
    width: '100%',

    gridTemplateColumns: '1fr 1fr 1fr',

    [mediaQuery.md]: {
        display: 'grid',
        columnGap: '1vw',
        paddingTop: '12vh',
    },

    [mediaQuery.lg]: {
        display: 'grid',
        columnGap: '2rem',
    },

    [mediaQuery.xl]: {
        columnGap: '4rem',
    },

    "& p":{
        padding: '0 2rem',
    },
})

export const cardWrapper = css({
    display: 'flex',
});

export const CardStyle = css({
    color: 'white',
    background: '#2a2b2d',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")`,

    "& figure":{
        padding: 0,
        margin: 0,
    },

    boxShadow: 'inset 0 0 100px black',
    "& img": {
        position: 'relative',
        display: 'block',
        width: '100%',
        zIndex: 0

    },

    "& div" : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'relative',
        padding: '2em',
        paddingTop : '0.5em',

        "& ul":{
            fontFamily: ['Questrial' , 'sans-serif'],
            margin: '0 2em',
            display: 'inline-block',
            fontSize: '1vw'
        },

        "& h3":{
            textAlign: 'center',
            flexBasis: '100%',
            fontSize: '2vw',
            fontWeight : 400,
            letterSpacing: '4px',
            marginBlockStart: '1em',
            marginBlockEnd:'1em',
            marginInlineStart: '0px',
            marginInlineEnd:'0px',
        },
    }
});

export const CardImgWrapper = css({
    position: 'relative',

    "& div": {
        position: 'absolute',
        top: 0, right :0, bottom: 0, left: 0,
        zIndex: 3,
        background: 'linear-gradient(rgba(10, 10, 10, 0.6), rgb(0 0 0 / 0%)), repeating-linear-gradient(0deg, transparent, transparent 2px, black 3px, black 3px)'
    }
});
