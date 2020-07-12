import {css} from 'emotion';
import {theme} from "../../StyleThemes/StylesThemes";
const { body, colors } =theme.light


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

    position: 'relative',
    background: body.section,
    fontFamily: 'MonumentExtended-Regular',
    color: colors.white,
    padding: '0 8rem',
    paddingBottom: "35vh",
});