import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		// return state.concat([action.payload.data]); 
			// We don't mutate(bad!!) our state. We return a completely new instance of state.
			// 'concat' doesn't mutate an existing array; it creates a new array that contains all the old data plus the new data

		// below, we'll use a nice ES6 version of 'concat', commented out above
		// it means... make a new array, put action.payload.data inside of it, and then take the variable '...state' which means 'state' may be an array, so take all of the entries inside of 'state' and insert them into the front of the array of action.payload.data -- something like flatten
		// it will look like [ city, city, city ] NOT [ city, [ city, city ] ]
		return [ action.payload.data, ...state ];
	}
	return state;
}