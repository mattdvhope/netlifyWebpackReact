import _ from 'lodash';
import React, { Component } from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import YTSearch from 'youtube-api-search';
require("./../style.css");

const API_KEY = 'AIzaSyAOFcqc8AfwZ2VekUKP7wDkbfeFJ77IPCE';

class App extends Component {
  constructor(props) {
  	super(props);

  	this.state = { 
  		videos: [],
  		selectedVideo: null
  	};

  	this.videoSearch('surfboards');
  }

  videoSearch(term) {
  	YTSearch({key: API_KEY, term: term}, (videos) => {
		this.setState({ // 'setState()' can be used inside constructor
			videos: videos,
			selectedVideo: videos[0]
		});
	});
  }

  render() {			//debounce from lodash enables a delay of 300 miliseconds between searches as we type characters into the search bar
  	const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

  	// using 'props' in a class-based component requires 'this.props'
	// using 'props' in a functional component is only 'props'
    return (
      <div>
    	<SearchBar onSearchTermChange={videoSearch} />
    	<VideoDetail video={this.state.selectedVideo} />
    		   {/* videos is a 'prop'-- props.videos */}
    	<VideoList
    		onVideoSelect={selectedVideo => this.setState({selectedVideo})}
    		videos={this.state.videos} />
      </div>
	);
  }
}

render(<App />, document.querySelector('.container'));






// import React, { Component } from 'react';

// import SearchBar from './components/search_bar';

// import {render} from 'react-dom';
// import HelloAgain from './../HelloAgain';
// import 'bootstrap';
// require("./../style.css");
// require("./../styles/main.scss");

// class App extends Component {
//   render() {
//     return (
//       <div>
//     	<HelloAgain />
//       </div>
// 	)
//   }
// }

// render(<App />, document.getElementById('root'));




// const url = `enigmatic-castle-3874.herokuapp.com/auth/login/`;

// const data = {
//     "email": "alex@test.tv",
//     "password": "password",
// };

// fetch(url, {
//     body: JSON.stringify(data), // must match 'Content-Type' header
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       // 'user-agent': 'Mozilla/4.0 MDN Example',
//       'Accept': 'application/json',
//       'content-type': 'application/json' //,
//       // 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // *manual, follow, error
//     referrer: 'no-referrer' // *client, no-referrer
// })
// .then(response => response.json())
// .then(res => console.log(res));








// const url = `http://localhost:3000/signup/`;

// const data = {
//     // "utf8": "✓",
//     // "authenticity_token": "MoXXlEE7oyIHWb9cSg6+prWcDkHHhMAvd1QmsKdJTBvIMG1ic1w25xANrfxOBoDgFf3VqPW4e9og9QTQauaMtA==",
//     "nickname": "Kelly",
//     "first_name": "Kelly",
//     "last_name": "Cooper",
//     "image": "",
//     "email": "kelly@test.tv",
//     "facebook": "",
//     "line": "",
//     "skype_name": "@kelly",
//     "number_of_slots": "",
//     "password": "password",
//     "password_confirmation": "password",
//     "postal_code": "10501",
//     "address_1": "",
//     "address_2": "",
//     "city": "",
//     "sub_district": "",
//     "district": "",
//     "province": "",
//     "country": "",
//     "phone_number": "05-554-6444",
//     "organization": "",
//     "age": "34",
//     "gender": "female",
//     "guest": false,
//     "role": "student",
//     "pin": "137367",
//     "off_site_location_i": "",
//     "class_time_scheduled": "14-18 May, 18.30-20.00, Monday - Friday"
//     // "controller": "sessions",
//     // "action": "create",
//     // "session": {
//     //     "email": "matt@test.com",
//     //     "password": "password"
//     // }
// };

// fetch(url, {
//     body: JSON.stringify(data), // must match 'Content-Type' header
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       // 'user-agent': 'Mozilla/4.0 MDN Example',
//       'Accept': 'application/json',
//       'content-type': 'application/json' //,
//       // 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // *manual, follow, error
//     referrer: 'no-referrer' // *client, no-referrer
// })
// .then(response => response.json())
// .then(res => console.log(res));







// const url = `https://enigmatic-castle-3874.herokuapp.com/users/`;

// const data = {
//     "utf8": "✓",
//     "authenticity_token": "MoXXlEE7oyIHWb9cSg6+prWcDkHHhMAvd1QmsKdJTBvIMG1ic1w25xANrfxOBoDgFf3VqPW4e9og9QTQauaMtA==",
//     "guest": "true",
//     "nickname": "Rick",
//     "first_name": "Richard",
//     "last_name": "Jones",
//     "phone_number": "979877777",
//     "email": "nick@test.tv",
//     "gender": "ผู้ชาย",
//     "class_time_scheduled": "14-18 May, 18.30-20.00, Monday - Friday",
//     // "controller": "users",
//     // "action": "create",
//     "user": {"first_name": "Richard",
//     "last_name": "Jones",
//     "email": "nick@test.tv",
//     "phone_number": "979877777",
//     "gender": "ผู้ชาย",
//     "guest": "true",
//     "nickname": "Nick"}
// };

// fetch(url, {
//     body: JSON.stringify(data), // must match 'Content-Type' header
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       // 'user-agent': 'Mozilla/4.0 MDN Example',
//       'Accept': 'application/json',
//       'content-type': 'application/json' //,
//       // 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // *manual, follow, error
//     referrer: 'no-referrer', // *client, no-referrer
// })
// .then(response => response.json())
// .then(res => console.log(res));




// const url = `https://enigmatic-castle-3874.herokuapp.com/class_times/`;
// fetch(url, {
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       // 'user-agent': 'Mozilla/4.0 MDN Example',
//       'Accept': 'application/json',
//       'content-type': 'application/json'
//     },
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // *manual, follow, error
//     referrer: 'no-referrer', // *client, no-referrer
// })
// .then(response => response.json())
// .then(res => console.log(res));




// let response_from_rails;
 
// const data = {
//     "name": "howard",
//     "email": "howard@email.com",
//     "password": "foobar",
//     "password_confirmation": "foobar"
// };

// const data_more = {
// 	"email": "howard@email.com",
//     "password": "foobar"
// }

// fetch(`http://localhost:3000/signup`, {
//     body: JSON.stringify(data), // must match 'Content-Type' header
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       // 'user-agent': 'Mozilla/4.0 MDN Example',
//       'Accept': 'application/json',
//       'content-type': 'application/json'
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // *manual, follow, error
//     referrer: 'no-referrer', // *client, no-referrer
// })
// .then(res => {
// 	if(res.headers.get("content-type") &&
//         res.headers.get("content-type").toLowerCase().indexOf("application/json") >= 0) {
// 		return res.json();
//     } else {
// 	  throw new TypeError();
//     }
// })
// .then(res => fetch(`http://localhost:3000/auth/login`, {
//     body: JSON.stringify(data_more),
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
// 	headers: {
// 	    'content-type': 'application/json'
// 	},
// 	method: 'POST',
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // *manual, follow, error
//     referrer: 'no-referrer', // *client, no-referrer
// })
// .then(res => {
// 	console.log(res);
// 	return res.json();
// })
// )
// .then(res => console.log(res));


// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(githubUser => new Promise(function(resolve, reject) {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   }))
//   // triggers after 3 seconds
//   .then(githubUser => alert(`Finished showing ${githubUser.name}`));






