import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

export default class App extends Component {
	render() {
		return (
			<div>
				<Route path="/post" component={CommentBox} />
				<Route path="/" exact component={CommentList} />				
			</div>
		);
	}
	
}