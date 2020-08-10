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

    "& h3":{
        paddingLeft: '1em',
        [ mediaQuery.tabletLandscape ] :{
            paddingLeft: 0
        },
    }

});

export const heroTitle = css({

})

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

    [mediaQuery.desktop]:{
        width: '68%'
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
});

export const headingLineOne = css({
    color:' #d3e0ed',
    [mediaQuery.deskTopWide]:{
        fontSize: '4vw',
    }
})

export const headingLineTwo = css({
    color:' #d3e0ed',
    [mediaQuery.deskTopWide]:{
        fontSize: '4vw',
    }
})

export const headingLineFour = css({
    color:' #d3e0ed',
    [mediaQuery.deskTopWide]:{
        fontSize: '4vw',
    }
})

export const headingLineFive = css({
    [mediaQuery.deskTopWide]:{
        fontSize : '5.5vw',
    }
})


