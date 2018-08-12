import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from './requireAuth';
import * as actions from '../actions';

class CommentBox extends Component {
	state = { comment: '' };

	handleChange = (event) => {
		this.setState({ comment: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} className="comment-box">
					<h4>Add a comment</h4>
					<textarea
						value={this.state.comment}
						onChange={this.handleChange} />
					<div>
						<button action="submit">Submit Comment</button>
					</div>				
				</form>
				<button onClick={this.props.fetchComments}>
					Fetch Comments 
				</button>
			</div>
		);
	}
}



export default connect(null, actions)(requireAuth(CommentBox));