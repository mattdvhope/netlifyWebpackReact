import React from 'react';
import { Component } from 'react';
import { createStore } from "redux";

import rootReducer from '../reducers/index.js';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

const store = createStore(rootReducer);


export default class App extends Component {
	render() {

		return (
			<div>
				<BookList store={store}/>
				<BookDetail store={store}/>
			</div>
		);
	}
}