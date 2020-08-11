import { css , keyframes } from 'emotion';
import { mediaQuery } from "../../../media-queries/mediaQueries";

const fillLine = keyframes({
    "0%": {
    opacity: 0,
    fill: 'none',
    strokeDashoffset: 1390,
    },

    "30%" :{
        opacity: 10,
        fill: 'none',
        strokeDashoffset: 1390,
    },

    "90%": {
        strokeDashoffset: 1390,
    },

    "100%": {
        opacity: 10,
        strokeDashoffset: 0,
    }
})

export const heroSection = css({
    padding: 0,
    height: '75%',

    [mediaQuery.desktop]:{

    }

});

export const heroContainer = css({
    position: 'relative',
    width: '100%',
    paddingTop: '5vh',

    [mediaQuery.desktop] :{
        display: 'flex',
    }

});

export const heroContext = css({
    position: 'relative',
    width: '100%',

    [ mediaQuery.desktop ]:{
        width: '45vw',
        paddingLeft: '4rem',
    },

});

export const heroContextWrapper = css({
    position: 'relative',
    display: 'flex' ,
});

export const heroImage = css({
    opacity : 0.5,
    position: 'absolute',
    // top:0,

    [mediaQuery.desktop]:{
        width: '60vw',
        right: 0,
    },

    [mediaQuery.deskTopWide]:{
        width: '56vw'
    },
});

export const circleContainer = css({
    position: 'relative',
    width:' 100%',
    textAlign: 'center',
    marginBottom: '3em',

    "& svg":{
        width: '30%',
        [mediaQuery.desktop]:{
            width: '50%'
        }
    },

    [mediaQuery.desktop]:{
        width: '68%',
    },

    "& path":{
        stroke: '#4a4a4a85',
        fill: 'none',
        strokeDasharray: 1390,
        opacity: 10,
        animation: `${ fillLine } 1.24s cubic-bezier(.17,.67,.83,.67) `,
    }
});

export const jobTitle = css({
    // color: '#78426e',
    color: '#bf43b8',
    fontSize: '4vw',
    position: 'absolute',
    width: '100%',
    top: '50%',
    bottom: '50%',
    left: 0,
    zIndex: 10,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    '-webkit-text-stroke-width': '1px',
    '-webkit-text-stroke-color': '#502b49',

    [mediaQuery.desktop]:{
        fontSize: '3vw',
    },

});

export const heroTitle = css({
    marginTop: '20vh',
    marginLeft: '5vw',
    fontSize: '3vw',
    [mediaQuery.tabletPortrait]:{
        marginTop: '25vh',
    },
    [mediaQuery.tabletLandscape]:{
        marginTop: '34vh',
    },

    [mediaQuery.desktop]:{
        padding: 0,
        marginTop: '10vh',
        marginLeft: '0vh'
    }
})

export const headingLineTwo = css({
    color:' #d3e0ed',
    fontSize: '7vw',
    paddingLeft: '5vw',

    [mediaQuery.tabletPortrait]:{
        fontSize: '7vw'
    },

    [mediaQuery.tabletLandscape]:{

    },

    [mediaQuery.desktop]:{
        padding: 0,
        fontSize: '6vw',
    },

    [mediaQuery.deskTopWide]:{
        fontSize: '4vw',
    }
})

export const headingLineThree = css({
    color:' #d3e0ed',
    fontSize: '7vw',
    paddingLeft: '5vw',

    [mediaQuery.tabletPortrait]:{
        fontSize: '7vw'
    },

    [mediaQuery.desktop]:{
        padding: 0,
        fontSize: '6vw',
    },

    [mediaQuery.deskTopWide]:{
        fontSize: '4vw',
    }
})

export const headingLineFour = css({
    fontSize: '10vw',
    paddingLeft: '5vw',
    [mediaQuery.tabletPortrait]:{
        fontSize: '11vw'
    },

    [mediaQuery.desktop]:{
        padding: 0,
        fontSize: '8vw',
    },

    [mediaQuery.deskTopWide]:{
        fontSize : '5.5vw',
    }
})


