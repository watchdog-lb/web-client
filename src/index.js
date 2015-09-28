
import React from 'react';
import { Router, Route } from 'react-router'

let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import App from './App';
import  About  from './components/About/index.js';
import Map from './components/Map/'

WebFont.load({
    google: {
      families: ['Roboto']
    }
  });

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
    { path: 'map', component: Map }
  ]
}

React.render(<Router routes={routes} />, document.body)


// import React from 'react'
// import { Router, Route, Link } from 'react-router'

// //import App from './App';
// import  About  from './components/About/index.js';

// WebFont.load({
//     google: {
//       families: ['Roboto']
//     }
// });


// class App extends React.Component {

//     render() {
//         return (
//                 <div>
//                     <Link to="/about">About</Link>
//                 </div>
//         );
//   }
// };

// React.render((
//   <Router>
//     <Route path="/" component={App}/>
//         <Route path="about" component={About} />
//     </ Route >

//   </Router>
// ), document.body)



