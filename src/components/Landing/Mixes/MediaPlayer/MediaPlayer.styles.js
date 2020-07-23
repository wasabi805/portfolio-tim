import { css } from 'emotion';

export const mediaPlayerWrapper =css({
    display: 'flex',
    border: '1px dotted lime',
});

export const trackInfoContainer = css({
    position: 'relative',
    border: '3px solid white',
});

export const timeline = css({
    width: '400px',
    height: '20px',
    background: '#f7009d33',
    marginTop: '20px',
    float: 'left',
    borderRadius: '15px',

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

export const getTrackImage = ( src )=> css({
    position: 'relative',
    display: 'inline-block',
    height: '300px' ,
    width: '300px',
    textAlign: 'center',

    border: '1px solid cyan',

    // backgroundImage: `url(${src})`,
    backgroundRepeat:'no-repeat',
    "& img":{
        position: 'absolute',
        height: 'auto',
        width: '100%'
    }

});

export const audioPlayer = css({
    display: 'flex',
    height: '60px',
    justifyContent: 'center',
    border: 'solid',
});

export const elapsedTime = css({
    width : '100px',
    display: 'block',
    textAlign : 'center'
});

export const timeDisplay = css({
    marginTop: '20px'
})