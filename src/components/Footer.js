import React, { component } from 'react';
import ToDo from './ToDoApp.js';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="footer">
				<input id="enterInput" type="submit" value="delete all" onClick={this.props.deleteAll}/>
				<div> made by brandon </div>
			</div>
			)
	}
}

export default Footer;