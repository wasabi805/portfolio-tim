const breakpoints = [275 ,544, 768, 992, 1920]

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

export const mediaQuery = {
    mobile: `@media (min-width: ${breakpoints[0]}px)`,
    TabletPortrait: `@media (min-width: ${breakpoints[1]}px)`,
    Desktop : `@media (min-width: ${breakpoints[2]}px)`,
    DeskTopWide: `@media (min-width: ${breakpoints[3]}px)`,
    xl:`@media (min-width: ${breakpoints[4]}px)`,
}


// export const mediaQuery = {
//     mobile: `@media (max-width: 543px)`,
//     TabletPortrait: `@media and (max-width: 767px ) and (min-width: 544px)`,
//     Desktop : `@media and (max-width: 1169px) and (min-width: 992px)`,
//     DeskTopWide: `@media and (min-width: 1170px)`,
//     // xl:`@media (min-width: ${breakpoints[4]}px)`,
// }







