import { css } from 'emotion';
import {mediaQuery} from "../../../media-queries/mediaQueries";
export const sectionTitle = css({
    textAlign: 'center'
});

export const footer = css({
    padding: '0',
    margin: '0',

    [mediaQuery.mobileS] :{
        padding: '0',
        margin: '0'
    },
});

export const footerWrapper = css({
    display: 'flex',
    position: 'relative',
    minHeight: '30vh',
    padding: '0',
});

export const footerContainer = css({
    flex: 1,
    // placeItems: 'center',
    background: '#2a2b2d',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")`,

    "& h3":{
        position: 'absolute',
        fontSize: '4vw',
        paddingLeft: '5vw',
        paddingTop: '13px',

        [mediaQuery.deskTopWide]:{
            // position: 'relative',
            fontSize: '4vw',
            marginLeft: '-17vw',
        }
    },

    "& h5":{
        marginTop: '2vh',
        marginLeft: '10%',
        // position: 'absolute',
        fontSize: '3vw',
    }
});

export const footerContextContainer = css({
    paddingLeft: '2%',

    [mediaQuery.tabletPortrait]:{
        paddingLeft: '10%',
    }

});

export const footerContextWrapper = css({
    "& h4":{
        fontSize: '3vw',
        color: '#cb82bd',
        margin: 0,
        [mediaQuery.deskTopWide]:{
            fontSize: '1.75vw',
            margin: 0,
            marginTop: '24%',
        }
    },

    "& p":{
        fontFamily: 'Helvetica',
        paddingLeft: '5px',
        fontSize: '8px',

        [mediaQuery.deskTopWide] : {
            fontSize: '1.2vw'
        }
    }
});

export const contactIconContainer = css({
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50%',
    width: '5vw',
    height:' 5vw',
    textAlign: 'center',
    margin: 'auto 6px 5px 0px;',
    background: '#62627e',
    zIndex: 1,

    [mediaQuery.desktop]:{
        width: '2vw',
        height:' 2vw',
    }
});

export const contactSvgContainer = css({
    zIndex: 10,
    display: 'inline-block',
});

export const iconWrapperText = css({
    margin: '7px 0',
});

export const contactEmail = css({
    fontSize: '12px',
    margin: 'auto 0',

    [ mediaQuery.desktop ]: {
        fontSize : '1.5vw',
    },
})

export const contactPhone =css({
    fontSize: '14px',
    margin: 'auto 0',

    [ mediaQuery.deskTopWide ]: {
        fontSize : '1.5vw',
    },
})

export const contactLocation = css({
    fontSize : '2.2vw',
    margin: 'auto 0',
    [ mediaQuery.deskTopWide ]: {
        fontSize : '1.2vw',
        color: 'red',
    },
});

export const contactInfo = css({
    display : 'flex',
    color: 'white',
    // border: '1px solid cyan'
});

export const socialMediaContainer = css({
    display: 'flex',
    zIndex: 10,

    [mediaQuery.tabletPortrait]:{
        width: '26vw',
    },

    [mediaQuery.tabletLandscape]:{
        width: '30vw',
    },

    [mediaQuery.desktop]:{
        // width: '50%',
        width: '23vw',
        paddingBottom: '12vh',
    },

    [mediaQuery.deskTopWide]: {
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
