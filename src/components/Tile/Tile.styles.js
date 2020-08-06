import {css} from 'emotion';
import { mediaQuery } from '../../media-queries/mediaQueries';

export const getTileImageStyle = ( url )=> css({
    position: 'relative',
    zIndex : 1,
    height: '20vh',
    overflow: 'hidden',
    opacity: 0.8,
    backgroundImage : `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    boxShadow: 'rgb(0 180 255 / 20%) 0px 3px 3px -2px, rgb(26 158 148 / 14%) 0px 3px 4px 0px, rgb(60 255 115 / 12%) 0px 1px 8px 0px',

    transition: 'transform .2s'
});

export const zoomIMage = css({
    transform: 'scale(1.06)'
});

export const tileImageOverlay = css({
    zIndex: '2',
    position: 'absolute',
    height: '100%',
    width: '100%',


    [mediaQuery.desktop] : {
        boxShadow: 'inset 0 0 100px black',
        backgroundImage: 'linear-gradient(rgb(24 49 62 / 60%), rgb(0 0 0 / 0%)), repeating-linear-gradient(0deg, transparent, transparent 2px, black 4px, black 4px)',
    },

});

export const tileContextStyle = css({
    color: 'white',
    margin: 'auto',
    width: '100%',

    [mediaQuery.mobileS]:{
        textAlign: 'center'
    },

    [mediaQuery.tabletLandscape]:{
        textAlign: 'start'
    },

    "& h3":{
        paddingTop: '25px',
        fontSize: '5vw',
        fontFamily: '',
        marginLeft : '2rem',

        [mediaQuery.deskTopWide]: {
            fontSize: '2.6vw',
        }
    },

    "& h5":{
        color: "#d3e0ed",
        fontSize: '3vw',
        margin: 0,
        textAlign: 'center',

        [mediaQuery.desktop]:{
            fontSize: '2vw',
        }
    },

    "& p":{
        fontFamily: 'Helvetica',
        [mediaQuery.desktop]: {
            marginLeft: '4rem',
        }
    }
});

export const tileGridContainerStyle = css({
    display: 'grid',
    gridGap : '2%',
    color: 'black',
});

export const tileGridItem = css({
    // display: 'grid',
    padding: '20px',
    zIndex: '20',

    [mediaQuery.tabletLandscape]:{
        display: 'grid',
        gridColumnGap: '22px',
        marginBottom: '3rem',
    }
});

export const imgLeftStyle = css({
    gridTemplateColumns: '2fr 1fr',
});

export const imgRightStyle = css({
    gridTemplateColumns: '1fr 2fr',
});

