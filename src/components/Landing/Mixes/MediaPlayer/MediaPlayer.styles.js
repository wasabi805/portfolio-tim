import { css } from 'emotion';
import {mediaQuery} from "../../../../media-queries/mediaQueries";

export const mediaPlayerWrapper =css({
    display: 'flex',
    paddingBottom: '5vh',

    [mediaQuery.tabletPortrait]:{
        paddingBottom: '12vh',
    },

    [mediaQuery.desktop]:{
        paddingBottom: '17vh',
    }
});

export const contextContainer = css({
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    border: '3px solid white',
});

export const context = css({
    display : 'flex' ,
    // border : '1px solid lime',
});

export const timeline = css({
    width: '400px',
    height: '20px',
    background: '#f7009d33',
    marginTop: '20px',
    float: 'left',
    borderRadius: '15px',
    marginRight: '15px',
});

export const playHead = css({
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    marginTop: '1px',
    background: 'white',
});

export const pButton = css({
    height:'60px',
    width: '60px',
    padding: '16px',
    border: 'none',
    backgroundSize: '50% 50%',
    backgroundPosition: 'center',
    float:'left',
    outline:'none',
    background: "transparent"
});

export const contextText = css({
    flex: '1' ,
    display: 'flex',
    position: 'relative',
    background : '#00ffff4a',
});

export const playlist = css({
    position: 'absolute',
    fontSize: '1vw',
    top: '0',
    bottom: '70px',
    fontFamily: 'D-DINCondensed',
    listStyleType: 'none',
    overflow: 'auto',
    width: '100%',

    "-webkit-scrollbar" : {
        display: 'none',
    },

    "-ms-overflow-style": 'none',
    'scrollbar-width': 'none'

});

export const contextImage = css({
    flex: '1' ,
    position: 'relative',
    minHeight: '39vh',

    "& img":{
        height: '100%',
        width: '100%',
    },

    [mediaQuery.desktop]:{
        minHeight: '73vh',
    },
});

export const audioPlayer = css({
    display: 'flex',
    height: '60px',
    justifyContent: 'center',
    borderTop: 'solid',
    background: '#222022'
});

export const elapsedTime = css({
    width : '100px',
    display: 'block',
    textAlign : 'center'
});

export const timeDisplay = css({
    marginTop: '20px'
})