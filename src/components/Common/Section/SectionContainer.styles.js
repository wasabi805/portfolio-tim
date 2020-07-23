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
        fontSize: '4.5rem',
        right  : 0
    },

    h3:{
        margin: 0,

        [mediaQuery.sm] :{
            fontSize: '4.5rem',
        }
    },

    //centered content
    h4:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform : 'translate(-50%, -50%)'
    },

    position: 'relative',
    background: body.section,
    backgroundImage: `url(${body.sectionNoise})`,
    animation: `${animateStatic} .5s linear infinite`,

    fontFamily: 'MonumentExtended-Regular',
    color: colors.white,
    padding: '0 4rem',
    paddingBottom: "20%",
});