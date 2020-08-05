import { css } from 'emotion';
import { theme } from "../../StyleThemes/StylesThemes";
import { mediaQuery } from "../../../media-queries/mediaQueries";

const { colors } = theme.light

export const sectionStyle= css({
    h2:{
        margin: 0,
        marginBottom: '2rem',
        right  : 0,
        fontSize: '3rem',

        [ mediaQuery.desktop ] :{
            fontSize: '4.5rem',
        }
    },

    h3:{
        margin: 0,

        [mediaQuery.tabletLandscape] :{
            fontSize: '4.5rem',
        }
    },

    position: 'relative',
    fontFamily: 'MonumentExtended-Regular',
    color: colors.white,
    // padding: '0 2rem',
});

export const sectionPaddingBottom = css({
    paddingBottom: '11vh',
})

export const sectionPaddingSides = css({
    padding: '0px 2%',

    [mediaQuery.desktop]: {
        padding: '5vh 10%'
    }
})