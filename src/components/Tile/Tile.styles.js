import {css} from 'emotion';

export const getTileImageStyle = (url )=> css({
    backgroundImage : `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
});

export const tileContextStyle = css({
    color: 'white',
    "& h3":{
        fontSize : '2rem',
        fontFamily: '',
        marginLeft : '2rem'
    },

    "& p":{
        fontFamily: 'Helvetica',
        marginLeft: '4rem',
    }
});