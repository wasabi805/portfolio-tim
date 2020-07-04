import { css } from 'emotion';
import { mq } from '../../../media-queries/mediaQueries';
import { theme } from '../../StyleThemes/StylesThemes';
const { colors , body } = theme.light;

export const introContainer = css({
    background: body.section,
    height: "45vh",
    paddingTop: "40vh",
    fontFamily: "MonumentExtended-Regular",
    color: colors.white,
    textAlign : "center",
    padding: "0 8rem",

    [mq.sm]: {
        padding: "0 2rem",
    },

    [mq.md]: {
        padding: "0 12rem",
    },

    [mq.lg]: {
        padding: "8rem 30rem",
    }
})