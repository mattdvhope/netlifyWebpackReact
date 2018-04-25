import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() { // a life-cycle method called after this component (GoogleMap) has been rendered to the screen
		// This enables third-party apis/libraries (which know nothing about react) to interact nicely with react.  In this case the google map will attach to the HTML element, 'this.refs.map' which we render below.
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		// this.refs.map ... an HTML element used above onto which the google map will be rendered/attached
		return <div ref="map" />;
	}
}

export default GoogleMap;