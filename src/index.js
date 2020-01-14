import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter basename="/modulo-3-evaluacion-final-ibelreal">
        <App />
    </BrowserRouter>, document.getElementById('root'));