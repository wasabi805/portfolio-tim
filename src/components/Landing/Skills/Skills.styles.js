import { css } from 'emotion';
import maxHeadroom from "../../../images/max-headroom.png";

export const skillsSectionTitle = css({
    float: 'right',
    position: 'relative',
    zIndex: '10',
});

export const skillsBackgroundWrapper = css({
    position: 'absolute',
    opacity: '0.4',

    "& div": {
        position: 'relative'
    }
});

export const purpleCircuitsRS = css({
    width: '100%',
    display : 'block',
})

export const purpleCircuitsRotated = css({
    display : 'block',
    width: '-webkit-fill-available',
    transform: 'rotate(180deg)',
    height: '40vh'
})

export const skillWrapper = css({
    position: 'relative',
    "& h2":{
        textAlign: 'right',
        margin: 0,
    },
    "& ul":{
        padding: 0,
        listStyleType: 'none',
    },
});

export const skillsBannerIMage  = css({
    gridColumnStart: 1,
    gridColumnEnd: '',
    gridRowStart: 1,

    backgroundImage: `url(${maxHeadroom})`,
    backgroundColor: 'cyan' ,
    position: 'absolute',
    width: '50vw',
    padding: '4rem 0',
    opacity: 0.3,
    backgroundSize: 'contain',
});


