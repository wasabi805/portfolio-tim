import { css } from 'emotion';
import { mediaQuery } from '../../../media-queries/mediaQueries';

export const IntroContext = css({
    fontFamily: 'D-DINCondensed',
    h4:{
        marginTop: 0,
        marginBottom: 0,
        paddingTop: '2vh',


       [mediaQuery.md] : {
           position: 'absolute',
           top: '50%',
           left: '50%',
           transform : 'translate(-50%, -50%)',
       },

       [mediaQuery.lg]: {
            fontSize: '1.7vw'
       }

    },
})