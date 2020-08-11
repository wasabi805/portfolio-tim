import { css } from 'emotion';
import { mediaQuery } from '../../../media-queries/mediaQueries';

export const IntroContainer = css({
    paddingBottom: '8vh',
    [mediaQuery.tabletPortrait]:{
        paddingBottom: '15vh'
    }
});

export const ampersand = css({
    fontFamily: 'Arial',
    fontSize: '2vw'
})

export const IntroContext = css({
    display: 'grid',
    height: '20vw',
    fontFamily: 'Morganite-SemiBold',
    letterSpacing: '1px',

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
