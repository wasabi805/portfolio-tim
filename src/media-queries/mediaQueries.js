

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

const breakpoints = [275 ,544, 768, 992, 1920]
export const mediaQuery = {
    mobile: `@media (min-width: ${breakpoints[0]}px)`,
    tabletPortrait: `@media (min-width: ${breakpoints[1]}px)`,
    desktop : `@media (min-width: ${breakpoints[2]}px)`,
    deskTopWide: `@media (min-width: ${breakpoints[3]}px)`,
    xl:`@media (min-width: ${breakpoints[4]}px)`,
}








