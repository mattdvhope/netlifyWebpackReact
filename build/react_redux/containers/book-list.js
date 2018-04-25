import React, { Component } from 'react';
import { connect } from 'react-redux'; // the glue between react & redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // With this, we take the value from selectBook(book) and make it available to all the reducers in the app.

// A container (BookList ..here..) is a React component that connects the state in Redux with the view/component in React.
class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)} 
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// This function is the glue between react & redux.
function mapStateToProps(state) {
	// Whatever is returned from here will show up as props
	// inside of BookList.

	return { // Whatever is returned here will be availble to our Component (above) as this.props
		books: state.books // the state 'books' from the Reducer
	};
}

// Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed
	// to all of our reducers.
	return bindActionCreators({ selectBook: selectBook }, dispatch); // 'dispatch' function will take all these actions and spit them out to all of our reducers.
}

// 'connect' takes a function (mapStateToProps) and a component (BookList) and produces a container -- a container is a component that as aware of the state that is contained by redux.
// This promotes BookList from a component to a container -- it needs to
// know about this new dispatch method, selectBook -- makes it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// NOTE 1: Whenever our state (passed into mapStateToProps) changes, this container (BookList) will instantly re-render with a new list of books.
// NOTE 2: Whenever the state changes, the object in the state function will be assigned as props to the component.
