// All reducers get 2 arguments: (1) state & (2) action.
// Reducers are only ever called when an action occurs.
// The 'state' argument is NOT application state -- only the state
//  that this reducer is responsible for. The same state keeps
//  flowing into this reducer over & over again.
export default function(state = null, action) { // if no state, then state is set to 'null'
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload; // returns a piece of state which is assembled as the global application state and is then injected into all of our application containers; the containers are then re-rendered (b/c of that change/addition) and cause the view to update
	}

	return state;
}