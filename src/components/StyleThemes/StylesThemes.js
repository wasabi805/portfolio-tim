import noise from '../../images/noisy-texture-blk.png'

export const theme = {
    light : {
        colors:{
            primary: '#383434',
            secondary: "cyan",
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