import React, { Component } from 'react';

class HelloAgain extends Component {
  render() {
    return (
    	<div>
	        <div id="userContainer">Hello AGAIN from React!!</div>
	        <button type="button" class="btn btn-primary">Primary <span className="badge badge-secondary badge-pill">7</span></button>
	        <i className='fa fa-search'> here </i>
	        <i className="far fa-address-book"></i>
	    </div>
    )
  }
}

export default HelloAgain;