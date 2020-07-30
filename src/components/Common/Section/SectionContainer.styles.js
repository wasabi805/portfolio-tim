import { css , keyframes } from 'emotion';
import { theme } from "../../StyleThemes/StylesThemes";
import { mediaQuery } from "../../../media-queries/mediaQueries";

const { body, colors } = theme.light

const animateStatic = keyframes({
    "0%" :{
        backgroundPosition: '0 0'
    },

    "100%":{
    backgroundPosition: '100% 100%'
    }
});

export const sectionStyle= css({
    h2:{
        margin: 0,
        marginBottom: '2rem',
        right  : 0,
        fontSize: '3rem',

        [ mediaQuery.Desktop ] :{
            fontSize: '4.5rem',
        }
    },

    h3:{
        margin: 0,

        [mediaQuery.TabletPortrait] :{
            fontSize: '4.5rem',
        }
    },

    position: 'relative',
    background: body.section,
    backgroundImage: `url(${body.sectionNoise})`,
    animation: `${animateStatic} .5s linear infinite`,

    fontFamily: 'MonumentExtended-Regular',
    color: colors.white,
    padding: '0 2rem',

    [mediaQuery.Desktop] :{

    },
    [mediaQuery.DeskTopWide] :{

    }
});

export const sectionPaddingBottom = css({
    paddingBottom: '20vh',
})