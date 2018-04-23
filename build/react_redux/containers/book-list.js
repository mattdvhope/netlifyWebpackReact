import React, { Component } from 'react';
import { connect } from 'react-redux'; // the glue between react & redux

// A container is a React component that connects the state in Redux with the view/component in React.
class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			)
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

// 'connect' takes a function (mapStateToProps) and a component (BookList) and produces a container -- a container is a component that as aware of the state that is contained by redux.
export default connect(mapStateToProps)(BookList);