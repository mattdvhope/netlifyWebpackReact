export function selectBook(book) { // an action creator
	// selectBook is an ActionCreator. It needs to return an action --
	// an object with a type property.
	return {
		type: 'BOOK_SELECTED', // always contains 'type'
		payload: book // sometimes contains a 'payload'
	}
}