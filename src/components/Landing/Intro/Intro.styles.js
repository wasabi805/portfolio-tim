import { css } from 'emotion';
import { mediaQuery } from '../../../media-queries/mediaQueries';

export const IntroContainer = css({
    paddingBottom: '8vh',
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
        fontSize: '28px',
        marginTop: 0,
        marginRight: '10%',
        marginLeft: '10%',


        [mediaQuery.tabletPortrait]:{
            fontSize: '40px',
            marginTop: '5%',
            paddingTop: '2vh',
        },

        [mediaQuery.desktop] : {
            fontSize: '2.4rem',
            marginRight: '10%',
            marginTop: '11%',
            marginLeft: '16%',
            paddingTop: '2vh',
        },

        [mediaQuery.deskTopWide]: {
            width: '75%',
            fontSize: '2.5vw',
            marginTop: '10%',
            marginRight: '10%',
            marginLeft: '10%',
        }

    },
});
