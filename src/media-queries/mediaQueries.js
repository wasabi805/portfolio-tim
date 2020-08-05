
const breakpoints = [320, 375 ,425 , 544, 768, 1024, 1440, 2560]
export const mediaQuery = {
    mobileS: `@media (min-width: ${breakpoints[0]}px)`,
    tabletPortrait : `@media (min-width: ${breakpoints[3]}px)`,
    tabletLandscape: `@media (min-width: ${breakpoints[4]}px)`,
    desktop : `@media (min-width: ${breakpoints[5]}px)`,
    deskTopWide: `@media (min-width: ${breakpoints[6]}px)`,
    xl:`@media (min-width: ${breakpoints[7]}px)`,
}








