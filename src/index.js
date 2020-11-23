import React from 'react';
import ReactDOM from 'react-dom';
//css
import './css/reset.css';
import './css/stylesheet.css';
//fonts
import './font/stylesheet.css';
import Navigation from './navbar/index.js';

function App(props){
  return(
    <Navigation/>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));