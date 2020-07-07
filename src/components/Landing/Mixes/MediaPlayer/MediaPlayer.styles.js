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
    background: '#4200f7',
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
    border: 'none',
    backgroundSize: '50% 50%',
    backgroundPosition: 'center',
    float:'left',
    outline:'none'

})
