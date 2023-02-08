import React from 'react';
import ReactDOM from 'react-dom/client';
// Lines 1 and 2 have to be there  - like import flask
import App from './App';  // this can change

const root = ReactDOM.createRoot(document.getElementById('root'));
// places items inside of the div with id root

// REACT COMPONENT
root.render(
    <App />  //this is a variable - renders the WHOLE APP.JS
            //self closing tag

);




