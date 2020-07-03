import { css } from 'emotion';
import { theme } from "../../StyleThemes/StylesThemes";
import { mq } from '../../../media-queries/mediaQueries';
const { colors , body }  = theme.light

export const Sample = css({
    position:'absolute',
    top: '147px',
    color: colors.white,
    height: '75vh',
    opacity: '0.5',

    [mq.md]:{
        top: '286px'
    },

    [mq.xl] : {
        top: '157px',
    }
});