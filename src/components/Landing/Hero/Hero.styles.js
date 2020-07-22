import { css , keyframes } from 'emotion';
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
    display: 'flex',
    width: '100%',
    paddingTop: '10vh',
});

export const heroContext = css({
    position: 'relative',
    width: '45vw',
    paddingLeft: '4rem',
});

export const heroContextWrapper = css({
    position: 'relative',
    display: 'flex' ,
});

export const heroImage = css({
    opacity : 0.5,
});

export const circleContainer = css({
    position: 'relative',
    width:' 100%',
    textAlign: 'center',
    marginTop: '3em',
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
    fontSize: '4vh',
    position: 'absolute',
    width: '100%',
    top:'50%',
    bottom: '50%',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
});

