/**
 * Created by krelix on 24/03/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/* TODO : Create and import JS components to render to the page
 First, start with the Main component to understand how import and rendering work
 Then, define routes in components/routes.js and associate them with components
 to define the expected routing methods
*/

import Main from './components/main';

ReactDOM.render(
  <Main />,
  document.getElementById('container')
);