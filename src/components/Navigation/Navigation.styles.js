import { css } from 'emotion';
import {theme} from "../StyleThemes/StylesThemes";
const { colors } = theme.light

export const getNavBodyStyles =css({
    background : colors.primary,
    color: colors.white,
    paddingTop: '2rem',
})