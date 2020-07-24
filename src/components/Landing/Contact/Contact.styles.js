import { css } from 'emotion';
import {mediaQuery} from "../../../media-queries/mediaQueries";
export const sectionTitle = css({
    textAlign: 'center'
});

export const footer = css({
    padding: '0',
    margin: '0',

    [mediaQuery.xs] :{
        padding: '0',
        margin: '0'
    },
});

export const footerWrapper = css({
    display: 'flex',
    position: 'relative',
    minHeight: '30vh',
    padding: '0',
    border: '1px solid lime'
});

export const footerContainer = css({
    display: 'grid',
    flex: 1,
    placeItems: 'center',
    fontSize: '2vw',
    background: '#2a2b2d',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")`,
});

export const iconContainer = css({
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50%',
    width: '3vw',
    height:' 3vw',
    textAlign: 'center',
    margin: 'auto 14px',
    background: '#62627e',
    zIndex: 1,
});

export const iconWrapper = css({
    zIndex: 10,
    display: 'inline-block',
});

export const iconWrapperText = css({
    margin: '7px 0',
});

export const contactInfo = css({
    display : 'flex',
    color: 'white',
    border: '1px #00ffff12 cyan'
});

export const socialIconContainer = css({
    display: 'grid',
    placeItems: 'center',
    width: '3vw',
    height:' 3vw',
    textAlign: 'center',
    margin: 'auto 14px',
    background: '#62627e',
    zIndex: 1,
});
