import React, { Component } from 'react';
import TextInput from './TextInput'
import CommentBox from './Comment'

export default class App extends Component {
  render() {
    return (
    	<div>
      	<h1>React is awesome!</h1>
      	<CommentBox></CommentBox>
      </div>
    );
  }
}
