import { css } from 'emotion';

export const mediaPlayerWrapper =css({
    display: 'flex',
    paddingBottom: '17vh'
});

export const contextContainer = css({
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    border: '3px solid white',
});

export const context = css({
    display : 'flex' ,
    border : '1px solid lime',
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
});

export const contextImage = css({
    flex: '1' ,
    position: 'relative',

    "& img":{
        height: 'auto',
        width: '100%',
    }

});

export const audioPlayer = css({
    display: 'flex',
    height: '60px',
    justifyContent: 'center',
    border: 'solid',
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