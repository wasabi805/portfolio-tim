import { css , keyframes } from 'emotion';
import {theme} from "../../StyleThemes/StylesThemes";
const { body, colors } =theme.light

const animateStatic = keyframes`
  0%{
    background-position: 0 0
  }
  
  100%{
    background-position: 100% 100%
  }
`
export const sectionStyle= css({
    h2:{
        margin: 0,
        marginBottom: '2rem',
        fontSize: '4.5rem',
        right  : 0
    },

    h3:{
        margin: 0,
        fontSize: '4.5rem'
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
    padding: '0 8rem',
    paddingBottom: "24vh",
});