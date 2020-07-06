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