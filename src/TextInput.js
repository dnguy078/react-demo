import React, { Component } from 'react';

class TextInput extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			inputText: ''
		}
	}

	handleChange(event){
		console.log(event)
		this.setState({
			inputText: event.target.value
		})
	}

  render() {
    return (
     	<div>
	      <input
				  text="text"
				  placeholder="This is going to be text"
				  value={this.state.inputText}
				  onChange={this.handleChange.bind(this)}
	      />
      </div>
    );
  }
}

export default TextInput
