import { css } from'emotion';

export const contextStyles = css({
    background: 'rgb(98, 107, 113)',
    flexBasis: '60%',
    paddingLeft: "2rem",
    paddingTop: "2rem",

    "& p":{
        fontFamily: 'Helvetica'
    },

    "& li":{
        margin: '10px 0',
        fontFamily : 'Helvetica'
    }
});

export const logoWrapperStyles= css({
    display: 'flex',
    background: 'cyan',
    flexBasis: '40%',
    alignItems: 'center'
});