import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//passing an instance of the App class Component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
