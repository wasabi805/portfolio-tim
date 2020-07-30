import { css } from 'emotion';
import { theme } from "../../StyleThemes/StylesThemes";
import { mediaQuery } from "../../../media-queries/mediaQueries";

export const LandingNavigationSection = css({
    display: "inline-flex",
    position: "sticky",
    fontSize: '2vw',
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
    },

    [mediaQuery.DeskTopWide]: {
        fontSize: '1.2vw',
    }
});