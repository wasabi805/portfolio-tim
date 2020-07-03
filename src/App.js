import React from 'react';
import './style/App.css';
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
