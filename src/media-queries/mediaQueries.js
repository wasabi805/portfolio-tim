const breakpoints = [275 ,544, 768, 992, 1170]
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







