import { css } from 'emotion';
import { mediaQuery } from '../../../media-queries/mediaQueries';

export const IntroContainer = css({
    paddingBottom: '38vh',
    [mediaQuery.tabletPortrait]:{
        paddingBottom: '15vh'
    }
});

export const IntroContext = css({
    fontFamily: 'D-DINCondensed',
    display: 'grid',
    height: '20vw',

    "& h4":{
        fontFamily: 'Morganite-SemiBold',
        fontSize: '40px',
        marginRight: '10%',
        marginTop: '5%',
        marginLeft: '10%',
        paddingTop: '2vh',

        [mediaQuery.desktop] : {
            fontSize: '2.4rem',
            marginRight: '10%',
            marginTop: '11%',
            marginLeft: '16%',
            paddingTop: '2vh'
        },

        [mediaQuery.deskTopWide]: {
            // fontSize: '1.7vw',
            // border: '1px solid yellow',
            width: '75%',
            fontSize: '2.5vw',
            marginRight: '10%',
            marginLeft: '10%',
        }

    },
});


// font-family: Morganite-SemiBold;
// font-size: 40px;
// margin-right: 10%;
// margin-top: 11%;
// margin-left: 16%;
// padding-top: 2vh;
// }

