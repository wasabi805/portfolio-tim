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
});

export const tileImageOverlay = css({
    zIndex: '100',
    position: 'absolute',
    height: '100%',
    width: '100%',


    [mediaQuery.md] : {
        boxShadow: 'inset 0 0 100px black',
        backgroundImage: 'linear-gradient(rgb(24 49 62 / 60%), rgb(0 0 0 / 0%)), repeating-linear-gradient(0deg, transparent, transparent 2px, black 4px, black 4px)',
    },

});

export const tileTitle = css({

});

export const tileContextStyle = css({
    color: 'white',
    "& h3":{
        // fontSize : '2rem',
        paddingTop: '25px',
        fontSize: '5vw',
        fontFamily: '',
        marginLeft : '2rem',

        [mediaQuery.lg]: {
            fontSize: '2.6vw',
        }
    },

    "& p":{
        fontFamily: 'Helvetica',
        [mediaQuery.md]: {
            marginLeft: '4rem',
        }
    }
});

export const tileGridContainerStyle = css({
    display: 'grid',
    gridGap : '5%',
    color: 'black'
});

export const tileGridItem = css({
    // display: 'grid',
    padding: '20px',
    zIndex: '10',
    [mediaQuery.lg]:{
        display: 'grid',
        marginBottom: '3rem',
    }
});

export const imgLeftStyle = css({
    gridTemplateColumns: '2fr 1fr',
});

export const imgRightStyle = css({
    gridTemplateColumns: '1fr 2fr',
});

