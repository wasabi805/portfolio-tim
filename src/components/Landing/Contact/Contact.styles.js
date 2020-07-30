import { css } from 'emotion';
import {mediaQuery} from "../../../media-queries/mediaQueries";
export const sectionTitle = css({
    textAlign: 'center'
});

export const footer = css({
    padding: '0',
    margin: '0',

    [mediaQuery.mobile] :{
        padding: '0',
        margin: '0'
    },
});

export const footerWrapper = css({
    display: 'flex',
    position: 'relative',
    minHeight: '30vh',
    padding: '0',
    border: '1px solid #00ff003b'
});

export const footerContainer = css({
    display: 'grid',
    flex: 1,
    placeItems: 'center',
    background: '#2a2b2d',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")`,

    "& h3":{
        position: 'absolute',
        fontSize: '4vw',
        paddingLeft: '5vw',
        paddingTop: '13px',

        [mediaQuery.DeskTopWide]:{
            // position: 'relative',
            fontSize: '4vw',
            marginLeft: '-17vw',
        }
    },

    "& h5":{
        marginTop: '2vh',
        marginLeft: '4vw',
        position: 'absolute',
        fontSize: '3vw',
    }
});

export const footerContextWrapper = css({
    "& h4":{
        fontSize: '3vw',
        color: '#cb82bd',
        [mediaQuery.DeskTopWide]:{
            margin: 0,
            marginTop: '16vh',
        }
    },

    "& p":{
        fontFamily: 'Helvetica',
        paddingLeft: '5px',
        fontSize: '8px',

        [mediaQuery.DeskTopWide] : {
            fontSize: '1.2vw'
        }
    }
});

export const iconContainer = css({
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50%',
    width: '5vw',
    height:' 5vw',
    textAlign: 'center',
    margin: 'auto 6px 5px 0px;',
    background: '#62627e',
    zIndex: 1,

    [mediaQuery.DeskTopWide]:{
        width: '3vw',
        height:' 3vw',
    }
});

export const iconWrapper = css({
    zIndex: 10,
    display: 'inline-block',
});

export const iconWrapperText = css({
    margin: '7px 0',
});

export const contactEmail = css({
    [ mediaQuery.DeskTopWide ]: {
        fontSize : '2vw',
    },
})

export const contactPhone =css({
    [ mediaQuery.DeskTopWide ]: {
        fontSize : '1.5vw',
    },
})

export const contactLocation = css({
    fontSize : '2.2vw',
    [ mediaQuery.DeskTopWide ]: {
        fontSize : '1.2vw',
    },
});

export const contactInfo = css({
    display : 'flex',
    color: 'white',
    border: '1px #00ffff12 cyan'
});

export const socialMediaContainer = css({
    display: 'flex',
    zIndex: 10,
    [mediaQuery.DeskTopWide]: {
        width: '16vw',
        paddingBottom: '12vh',
    },

});

export const socialIconWrapper = css({
    margin: '4px',
    padding:'10px',
    background: '#62627e',
    zIndex: 1,
});
