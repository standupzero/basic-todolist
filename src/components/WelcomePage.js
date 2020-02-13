import React, { component } from 'react';
import ToDo from './ToDoApp.js';

class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="welcome">
				<h1> Welcome</h1>
				<h2>Who does this list belong to?</h2>
				<form onSubmit={this.props.onEnter}>
				<input placeholder="your name"/>
				<input type="submit" value="enter" onClick={this.props.onEnter}/>
				</form>
			</div>
			)
	}
}

export default WelcomePage;