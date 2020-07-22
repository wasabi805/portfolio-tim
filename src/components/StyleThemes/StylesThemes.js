import noise from '../../images/noisy-texture-blk.png'

export const theme = {
    light : {
        colors:{
            primary: '#383434',
            secondary: "cyan",
            tertiary: "lime",
            white: "white",
        },
        body:{
            section: 'black',
            sectionLight: 'grey',
            sectionNoise : `${ noise }`,
            menu: 'magenta'
        }

    }
}