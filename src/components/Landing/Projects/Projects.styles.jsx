import { css } from 'emotion';
import { mediaQuery } from '../../../media-queries/mediaQueries';

export const projectsWrapper = css({
    display: 'block',
    padding: '12vh 0',

    "& h2":{
        fontSize: '10vw',
        textAlign: 'center',
        [mediaQuery.DeskTopWide]:{
            fontSize: '5vw',
        },

    },
    "& a ":{
        textDecoration : 'none'
    },

    [mediaQuery.DeskTopWide] : {
        paddingTop: '1.25rem',
    }
});

export const projectsBackgroundImage = css({
    position: 'absolute',
    opacity: 0.4,
    right: 0,
    width: '90%',

    "& img": {
        display: 'block',
        width: '100%',

        [mediaQuery.TabletPortrait] : {
            width: '45vw'
        },

        [mediaQuery.DeskTopWide] : {
            width: '100%',
            // border: '1px solid purple',
        }
    }
});

export const rotateImage = css({
    transform: 'rotate(180deg)'
});