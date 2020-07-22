import { css } from 'emotion';

export const mediaPlayerWrapper =css({
    display: 'flex',
    flexDirection: 'column',
});

export const trackInfoContainer = css({
    border: '3px solid white',
    width: '50vw',
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
    display: 'block',
    height: '500px' ,
    width: '500px',
    textAlign: 'center',
    backgroundImage: `url(${src})`,
    backgroundRepeat:'no-repeat',
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