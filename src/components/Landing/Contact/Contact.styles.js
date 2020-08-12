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

    [mediaQuery.desktop]:{
        minHeight: '25vw'
    }
});

export const footerContainer = css({
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    background: '#2a2b2d',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")`,
    padding: '11vh 0',

    "& h3":{
        position: 'absolute',
        fontSize: '4vw',
        paddingLeft: '5vw',
        paddingTop: '13px',

        [mediaQuery.deskTopWide]:{
            display: 'initial',
            fontSize: '4vw',
            marginLeft: '-17vw',
        }
    },

});

export const footerContextContainer = css({
    paddingLeft: '2%',

    [mediaQuery.tabletPortrait]:{
        paddingLeft: '10%',
    },

    "& h4":{
        margin: 0,
        fontSize: '6vw',
        paddingBottom: '12px',

        [mediaQuery.tabletPortrait]:{
            fontSize: '4vw',
        },

        [mediaQuery.desktop]:{
            fontSize: '3vw',
        },

        [mediaQuery.deskTopWide]:{
            fontSize: '2.5vw',
        },
    },

    "& p ":{
        margin: 'auto 0',
        [mediaQuery.tabletPortrait]:{
            margin: 'initial'
        }
    }
});

export const contactLocation = css({
    fontSize : '3vw',
    [mediaQuery.tabletPortrait]:{
        fontSize : '2vw',
    },

    [mediaQuery.desktop]:{
        fontSize : '1.3vw',
    },
});

export const contactPhone =css({
    fontSize : '3vw',
    [mediaQuery.tabletPortrait]:{
        fontSize : '2.3vw',
    },

    [ mediaQuery.desktop ]: {
        fontSize : '1.5vw',
    },
})

export const contactEmail = css({
    fontSize : '3vw',
    [mediaQuery.tabletPortrait]:{
        fontSize : '2.5vw',
    },

    [ mediaQuery.desktop ]: {
        fontSize : '1.5vw',
    },
})

export const contactInfo = css({
    display : 'flex',
});

export const footerContextWrapper = css({
    "& h4":{
        fontSize: '3vw',
        color: 'hotpink',
        margin: 0,

        [mediaQuery.tabletPortrait]:{
            fontSize: '2vw',
        },
    },

    "& strong":{
        fontFamily: 'Helvetica',
        fontSize: '0.6em',
        fontWeight: 400,

        [mediaQuery.tabletPortrait]:{
            fontWeight: 'initial',
            fontSize: '1.8vw'
        },

        [mediaQuery.desktop]:{
            display: 'block',
            marginBottom: '1.2vh',
            fontSize: '1vw',
        },

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
    marginRight: '1vw',

    [mediaQuery.tabletPortrait]:{
        width: '3vw',
        height:' 3vw',
    },

    [mediaQuery.tabletLandscape]:{
        width: '4vw',
        height:' 4vw',
    },

    [mediaQuery.desktop]:{
        width: '3vw',
        height:' 3vw',
    },

    [mediaQuery.deskTopWide]:{
        width: '2vw',
        height:' 2vw',
    }


});

export const contactSvgContainer = css({
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

});

export const iconWrapperText = css({
    margin: '7px 0',
});

export const socialMediaContainer = css({
    display: 'flex',
    zIndex: 10,

    [mediaQuery.tabletPortrait]:{
        width: '36vw',
    },

    [mediaQuery.tabletLandscape]:{
        width: '30vw',
    },

    [mediaQuery.desktop]:{
        width: '23vw',
    },

    [mediaQuery.deskTopWide]: {
        width: '16vw',
    },

});

export const socialIconWrapper = css({
    margin: '4px',
    padding:'10px',
    background: '#62627e',
    zIndex: 1,
});
