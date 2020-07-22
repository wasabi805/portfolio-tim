import { css } from'emotion';

export const contextStyles = css({
    fontFamily: 'Arial',
    perspective: '1000px',
    flexBasis: '60%',
    paddingLeft: "2rem",
    paddingTop: "2rem",
    background: '#2a2b2d',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")`,

    "& li":{
        listStyleType: 'none',
    }
});

export const logoWrapperStyles= css({
    display: 'flex',
    flexBasis: '40%',
    alignItems: 'center',
    background: 'radial-gradient( circle, transparent 35%, black 130%), #767b885c',
});