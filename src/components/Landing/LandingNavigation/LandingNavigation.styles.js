import { css } from 'emotion';
import { theme } from "../../StyleThemes/StylesThemes";

const { menu }  = theme.light.body

export const LandingNavigationSection = css({
    background: menu,
    display: "inline-flex",
    position: "sticky",
    top: 0,
    float: "right",
    "& a:link":{
        padding: '0 1em',
        textDecoration: 'none',
        fontFamily: 'MonumentExtended-Ultrabold',

        "& hover": {
            cursor : 'pointer'
        }
    },

    "& ul": {
        listStyle: "none"
    }
});