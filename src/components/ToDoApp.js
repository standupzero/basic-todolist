import React, { component } from 'react';
import WelcomePage from './WelcomePage.js';
import ToDoPage from './ToDoPage.js'


function Router(props) {
	if (props.welcome) {
		return <WelcomePage onEnter={props.onEnter}/> //if home is true, there will be home page rendered
	} else { 
		return <ToDoPage/>  //if home is false, that means you've entered
	}
}


class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {welcome: true};
		this.onEnter = this.onEnter.bind(this);
	}


	onEnter() {
		this.setState({welcome: false});
	}

	render() {
		return (
				<div className="ToDo">
					<Router welcome={this.state.welcome} onEnter={this.onEnter}/>
				</div>
			)
	}
}

export default ToDo

/*
*/
