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

        [ mediaQuery.md ] :{
            fontSize: '4.5rem',
        }
    },

    h3:{
        margin: 0,

        [mediaQuery.sm] :{
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


    [mediaQuery.md] :{
        // padding: '0 4rem',
        padding: '15vh 2rem'
    },
    [mediaQuery.lg] :{
        padding: '15vh 4rem',
    }




});