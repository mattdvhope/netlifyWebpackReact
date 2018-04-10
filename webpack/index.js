import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
	  <Hello />
	)
  }
}

render(<App />, document.getElementById('root'));


fetch(`https://cityenglishproject.com/class_times`, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      // 'user-agent': 'Mozilla/4.0 MDN Example',
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // *manual, follow, error
    referrer: 'no-referrer', // *client, no-referrer
})
.then(response => response.json())
.then(res => console.log(res));







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






