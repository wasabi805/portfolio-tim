import { css } from 'emotion';

export const mediaPlayerWrapper =css({
    display: 'flex',
    flexDirection: 'column',
});

export const playButton = css({
    border: '1px solid lime',
    borderRadius: '50%',
    padding: '1rem',
    "& hover":{
        cursor: 'pointer',
        background: 'blue'
    }
})

export const mediaButton = css({
    border: '1px solid lime',
    borderRadius: '50%',
    margin: 'auto 12px' ,
    padding: '1rem',
    width: '2rem',
    height: '2rem',

    "& hover":{
        cursor: 'pointer'
    }
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
    // width: '700px',
    height: '60px',
    justifyContent: 'center',
    border: 'solid',
});