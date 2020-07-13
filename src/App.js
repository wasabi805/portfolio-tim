import React from 'react';
import './style/App.scss';
import Router from './Router'
import Header from './components/Header/';

const App =()=>{
    return(
        <div className="App">
            <Header/>
            <Router/>
        </div>
    )
}

export default App;
