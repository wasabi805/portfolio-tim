import React from 'react';
import './style/App.scss';
import { cx } from 'emotion'
import { AppStyle } from './style/App.styles';
import Router from './Router'
import Header from './components/Header/';

const App =()=>{
    return(
        <div className={cx('App' , AppStyle )}>
            <Header/>
            <Router/>
        </div>
    )
}

export default App;
