/**
 * Created by krelix on 01/04/2016.
 */

import React from 'react';

export default class Main extends React.Component {
  // Render method. use {this.props.children} after routing is defined
  render(){
    return (
      <div style={{display: 'flex', flexFlow: 'row'}}>
        <div>HELLO THIS IS SOME TEXT TO BE REPLACED</div>
      </div>
    );
  }
}
