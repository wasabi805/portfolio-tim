import { css } from 'emotion';
import { mq } from '../../../media-queries/mediaQueries';

export const introContainer = css({
    background: "black",
    height: "65vh",
    paddingTop: "40vh",
    fontFamily: "MonumentExtended-Regular",
    color: 'white',
    textAlign : "center",
    padding: "0 8rem",

    [mq.sm]: {
        padding: "0 2rem",
    },

    [mq.md]: {
        padding: "0 12rem",
    },

    [mq.lg]: {
        padding: "8rem 22rem",
    }
})