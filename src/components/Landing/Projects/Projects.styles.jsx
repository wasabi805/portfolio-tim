import { css } from 'emotion';
import { mediaQuery } from '../../../media-queries/mediaQueries';

export const projectsWrapper = css({
    position: 'relative',
    display: 'block',

    "& h2":{
        textAlign: 'center'
    },
    "& a ":{
        textDecoration : 'none'
    }
});

export const projectsBackgroundImage = css({
    position: 'absolute',
    opacity: 0.4,
    right: 0,

    "& img": {
        display: 'block',

        [mediaQuery.sm] : {
            width: '45vw   '
        },

        [mediaQuery.lg] : {
            width: '85vw   '
        }
    }
});

export const rotateImage = css({
    transform: 'rotate(180deg)'
});