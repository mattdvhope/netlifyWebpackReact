import React from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app.js';
import reducers from './reducers';
require("./../styles/styles_for_redux.scss");

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, document.querySelector('.container')
);

