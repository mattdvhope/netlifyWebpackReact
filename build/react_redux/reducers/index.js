import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// A 'reducer' (reducer_books.js) is a function that returns a piece of the application state -- the value of the application state.
// Because our app can have many different pieces of state, therefore we can many different reducers.
const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
