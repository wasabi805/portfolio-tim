import { css } from 'emotion';
import { theme } from "../../StyleThemes/StylesThemes";
import maxHeadroom from "../../../images/max-headroom.png";
const colors = theme.light;

export const skillsTile = css({
    display: 'flex',
    color: colors.white,
    marginTop:'5rem',

    "& p":{
        padding: '0 2rem',
    },
});

export const skillWrapper = css({
    position: 'relative',
    "& h2":{
        textAlign: 'right',
    },
});

export const skillsBannerIMage  = css({
    backgroundImage: `url(${maxHeadroom})`,
    backgroundColor: 'cyan' ,
    position: 'absolute',
    width: '50vw',
    padding: '4rem 0',
    opacity: 0.3,
    backgroundSize: 'contain',
});

