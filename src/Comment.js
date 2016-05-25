import React, { Component } from 'react';
import TextInput from './TextInput'

class Comment extends Component {
  render() {
    return (
    	<p>
    		<span>Comment: </span>
    		<span>{this.props.body} are amazing!</span>
    	</p>
    );
  }
};

class CommentList extends Component {

	render() {
		const commentList = [
			{id: 1, commentBody: 'tacos'},
			{id: 2, commentBody: 'burritos'}
		];

		return (
			<div className="commentList">
				<h1></h1>
				{commentList.map(function(comment){
					return <Comment key={comment.key} body={comment.commentBody}/>;
				})}
			</div>
		);
	}
};

class CommentForm extends Component {
	render() {
    return (
      <div className="commentForm">
        I am a CommentForm.
        <TextInput> </TextInput>
      </div>
    );
	}
};

// top level component
class CommentBox extends Component {
	// getInitialState: function() {
 //    return {data: []};
 //  },

  render() {
    return (
      <div className="commentBox">
        <CommentForm />
        <h1>Comments</h1>
        <CommentList />
      </div>
    );
  }
}

export default CommentBox