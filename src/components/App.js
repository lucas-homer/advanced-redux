import React, { Component } from 'react';

import CommentList from './CommentList';
import CommentBox from './CommentBox';

export default class App extends Component {
	render() {
		return (
			<div>
				<CommentBox />
				<CommentList />
			</div>
		);
	}
	
}