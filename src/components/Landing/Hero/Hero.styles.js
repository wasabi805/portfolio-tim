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
});

export const heroContainer = css({
    position: 'relative',
    width: '100%',
    paddingTop: '5vh',

    [mediaQuery.Desktop] :{
        display: 'flex',
    }

});

export const heroContext = css({
    position: 'relative',
    width: '100%',

    [ mediaQuery.Desktop ]:{
        width: '45vw',
        paddingLeft: '4rem',
    },

    "& h1":{
        paddingLeft: '0.5rem',
        paddingTop: '12vh',

        [ mediaQuery.TabletPortrait ] :{
            paddingLeft: 0
        },

        [ mediaQuery.Desktop ] :{
            paddingTop: 0
        },
    },

    "& h3":{
        paddingLeft: '1em',
        [ mediaQuery.TabletPortrait ] :{
            paddingLeft: 0
        },

        fontSize : '5.5vw',
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

    [mediaQuery.Desktop]:{
        width: '60vw',
        right: 0,
    }
});

export const circleContainer = css({
    position: 'relative',
    width:' 100%',
    textAlign: 'center',
    marginTop: '3em',
    marginBottom: '3em',
    "& path":{
        stroke: '#4a4a4a85',
        fill: 'none',
        strokeDasharray: 1390,
        opacity: 10,
        animation: `${ fillLine } 1.24s cubic-bezier(.17,.67,.83,.67) `,
    }
});

export const jobTitle = css({
    color: '#bb54a885',
    fontSize: '4vw',
    position: 'absolute',
    width: '100%',
    top:'50%',
    bottom: '50%',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
});

