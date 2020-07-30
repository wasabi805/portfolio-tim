import { css } from 'emotion';
import { mediaQuery } from '../../../media-queries/mediaQueries';

export const IntroContext = css({
    fontFamily: 'D-DINCondensed',
    display: 'grid',
    height: '20vw',




    h4:{
        marginTop: 0,
        marginBottom: 0,
        paddingTop: '2vh',
       [mediaQuery.Desktop] : {

       },

       [mediaQuery.DeskTopWide]: {
            fontSize: '1.7vw',
           width: '75%',
           margin: 'auto',
       }

    },
})