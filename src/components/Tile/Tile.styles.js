import {css} from 'emotion';

export const getTileImageStyle = (url )=> css({
    boxShadow: 'inset 0 0 100px black',
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

export const tileGridContainerStyle = css({
    display: 'grid',
    height: '90vh',
    color: 'black'
});

export const tileGridItem = css({
    display: 'grid',
    border: '1px solid #008b8b38',
    padding: '20px',
    marginBottom: '3rem',
});

export const imgLeftStyle = css({
    gridTemplateColumns: '2fr 1fr',
});

export const imgRightStyle = css({
    gridTemplateColumns: '1fr 2fr',
});

