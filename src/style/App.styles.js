import { css } from 'emotion';
import { mediaQuery } from '../media-queries/mediaQueries';

export const AppStyle = css({

    [mediaQuery.xl]:{
        position: 'relative',
        width: '75vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

