import { css } from 'emotion';
import { mediaQuery } from "../../media-queries/mediaQueries";

export const CardContainer = css({
    position: 'relative',
    color: 'white',
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
    padding: '0',
    [ mediaQuery.md ] :{
        border: '1px solid #00ff0038',
    }
});

export const CardStyle = css({
    color: 'white',
    background: '#2a2b2d',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")`,
    border: '1px solid #00ff0038',

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
        // paddingTop : '0.5em',

        "& ul":{
            fontFamily: 'D-DINCondensed',
            margin: '0 2em',
            display: 'inline-block',
            fontSize: '3vw',

            [mediaQuery.sm] :{
                fontSize : '1vw'
            },

            "& li":{
               marginTop: '1vh'
            }
        },

        "& h3":{
            textAlign: 'center',
            flexBasis: '100%',
            fontSize: '5.5vw',
            fontWeight : 400,
            letterSpacing: '4px',
            marginBlockStart: '1em',
            marginBlockEnd:'1em',
            marginInlineStart: '0px',
            marginInlineEnd:'0px',

            [mediaQuery.sm] :{
                fontSize : '2vw'
            }
        },
    },

    [ mediaQuery.md ] :{
        border: 'none',
    }

});

export const endAlign = css({
    textAlign: 'end',
});

export const startAlign = css({
    textAlign: 'start'
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
