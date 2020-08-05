import { css } from 'emotion';
import { theme } from "../../StyleThemes/StylesThemes";
import { mediaQuery } from "../../../media-queries/mediaQueries";

export const LandingNavigationSection = css({
    display: "flex",
    justifyContent: 'flex-end',
    position: "sticky",
    fontSize: '2vw',
    top: '24px',
    right: '12px',
    zIndex: 200,

    "& ul": {
        listStyle: "none"
    },

    "& button":{
        color: 'white',
        background: 'none!important',
        border: 'none',
        padding: '0!important',
        margin: '0 1em',
        /*optional*/
        cursor: 'pointer',
        textDecoration: 'none',
        outline: 'none',

        "p":{
            fontFamily: 'MonumentExtended-Ultrabold',
            fontSize: '2.5vw',


            [mediaQuery.tabletLandscape]:{
                fontSize:'1.2vw',
            },

            [mediaQuery.deskTopWide]: {
                fontSize: '1.2vw',
            }
        }

    },


});