import { css } from 'emotion';
import { mediaQuery } from '../../../media-queries/mediaQueries';

export const IntroContext = css({
    h4:{
        marginTop: 0,
        paddingTop: '2vh',

       [mediaQuery.md] : {
           position: 'absolute',
           top: '50%',
           left: '50%',
           transform : 'translate(-50%, -50%)',
       }
    },
})