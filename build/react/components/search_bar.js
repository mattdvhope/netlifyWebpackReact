import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) { 
		super(props); // calling the parent/super method (Componet) on the parent class (Component)

		// Only set state like this inside constructor!! Everywhere else, use 'this.setState()' to change state.
		this.state = { term: '' }; // initializing state; in this case the Search 'term' starts as an empty string
	}

	render() {
		return( 
			<div className="search-bar">
				<input // A 'constrolled component' has its value set by state.
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;