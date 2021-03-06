import { css } from 'emotion';
import { mediaQuery } from '../../../media-queries/mediaQueries';

export const mixesWrapper = css({
    position: 'relative',
    width: '99%',
    [mediaQuery.desktop]:{
        paddingTop: 0,
    },
});