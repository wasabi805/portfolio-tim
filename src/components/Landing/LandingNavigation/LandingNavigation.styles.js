import { css } from 'emotion';
import { theme } from "../../StyleThemes/StylesThemes";

export const LandingNavigationSection = css({
    display: "inline-flex",
    position: "sticky",
    top: '24px',
    right: '12px',
    float: "right",
    zIndex: 200,
    "& a:link":{
        padding: '0 1em',
        textDecoration: 'none',
        fontFamily: 'MonumentExtended-Ultrabold',

        "& hover": {
            cursor : 'pointer'
        }
    },

    "& a":{
        color: 'white'
    },

    "& ul": {
        listStyle: "none"
    }
});