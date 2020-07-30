import { css } from 'emotion';
import { mediaQuery } from "../../../media-queries/mediaQueries";

export const homeSection = css({
    padding: '0',
    margin: '0',
    // border: '1px solid yellow',
});

export const heroBackgroundImg = css({
    width: '100%',
    opacity: '0.4',

    [mediaQuery.xl] : {
        width: '80%',
    }

})
