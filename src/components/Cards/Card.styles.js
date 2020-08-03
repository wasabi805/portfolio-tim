import { css } from 'emotion';
import { mediaQuery } from "../../media-queries/mediaQueries";

export const CardContainer = css({
    position: 'relative',
    color: 'white',
    width: '100%',

    gridTemplateColumns: '1fr 1fr 1fr',

    [mediaQuery.desktop]: {
        display: 'grid',
        columnGap: '1vw',
        paddingTop: '12vh',
    },

    [mediaQuery.deskTopWide]: {
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
    padding: '0',
});

export const cardBorder = css({
    boxShadow: 'rgb(0 180 255 / 20%) 0px 3px 3px -2px, rgb(26 158 148 / 14%) 0px 3px 4px 0px, rgb(60 255 115 / 12%) 0px 1px 8px 0px',
});

export const CardStyle = css({
    color: 'white',
    background: '#2a2b2d',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")`,
    position: 'relative',
    height: '100%',

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
        padding: '3em',
        // paddingTop : '0.5em',

        "& ul":{
            fontFamily: 'D-DINCondensed',
            margin: '0 2em',
            display: 'inline-block',
            fontSize: '3vw',

            [mediaQuery.tabletPortrait] :{
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

            [mediaQuery.tabletPortrait] :{
                fontSize : '2vw'
            }
        },
    },

    [ mediaQuery.desktop ] :{
        border: 'none',
    }

});

export const CardImgWrapper = css({
    position: 'relative',

    "& div": {
        position: 'absolute',
        display: 'inline',
        top: 0, right :0, bottom: 0, left: 0,
        zIndex: 3,
        background: 'linear-gradient(rgba(10, 10, 10, 0.6), rgb(0 0 0 / 0%)), repeating-linear-gradient(0deg, transparent, transparent 2px, black 3px, black 3px)',

        "& svg":{
            position: 'absolute',
            bottom: '10%'
        }
    },
});

export const cardTitle = css({
    position: 'absolute',
    bottom: 0,
    display: 'block',
    left: '0', right: '0',
    marginBottom: '1vh',
    textAlign: 'center',
    fontSize: '6vw',
    zIndex: 9,

    [mediaQuery.tabletPortrait]:{
        fontSize: '1.7vw',
    }
});

export const cardList = css({
    textAlign: 'center',
    margin: '0',

    "& li":{
        listStyleType:'none',
        fontFamily: 'D-DINCondensed',

        fontSize: '5vw',

        [mediaQuery.tabletPortrait]:{
            fontSize: '2vw'
        },

        [mediaQuery.desktop]:{
            fontSize: '1.3vw' ,
        }
    }
});
