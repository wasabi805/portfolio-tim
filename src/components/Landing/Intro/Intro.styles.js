import { css } from 'emotion';
import { mq } from '../../../media-queries/mediaQueries';
import { theme } from '../../StyleThemes/StylesThemes';
const { colors , body } = theme.light;

export const introContainer = css({
    // position: 'relative',
    // border: '1px solid cyan',
    // fontFamily: "MonumentExtended-Regular",
    // color: colors.white,

    "& p":{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform : 'translate(-50%, -50%)'
    }

    // padding: "0 8rem",

    // [mq.sm]: {
    //     padding: "0 2rem",
    // },
    //
    // [mq.md]: {
    //     padding: "0 12rem",
    // },
    //
    // [mq.lg]: {
    //     padding: "8rem 30rem",
    // }
})