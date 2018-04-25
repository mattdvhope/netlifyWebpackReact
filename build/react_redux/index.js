import React from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './components/app.js';
require("./../style.css");

render(<App />, document.querySelector('.container'));

