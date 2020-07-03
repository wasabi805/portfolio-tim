import {css} from 'emotion';
import {theme} from "../../StyleThemes/StylesThemes";
const { body, colors } =theme.light


export const sectionStyle= css({
    background: body.section,
    color: colors.white,
    height: "75vh",
    paddingTop: "40vh",
    fontFamily: 'MonumentExtended-Regular',
    textAlign : 'center',
    padding: '0 8rem',
});