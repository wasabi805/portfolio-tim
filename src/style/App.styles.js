import { css } from 'emotion';
import { mediaQuery } from '../media-queries/mediaQueries';

export const AppStyle = css({
    [mediaQuery.deskTopWide]:{
        position: 'relative',
        marginLeft: '10%',
        marginRight: '10%',
    }
});

