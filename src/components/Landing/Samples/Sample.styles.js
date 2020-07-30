import { css } from 'emotion';
import { theme } from "../../StyleThemes/StylesThemes";
import { mediaQuery } from '../../../media-queries/mediaQueries';
const { colors , body }  = theme.light

export const Sample = css({
    position:'absolute',
    top: '147px',
    color: colors.white,
    height: '75vh',
    opacity: '0.5',
    zIndex: 200,

    [mediaQuery.Desktop]:{
        top: '286px'
    },

    [mediaQuery.xl] : {
        top: '157px',
    }
});