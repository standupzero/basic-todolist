import React, { component } from 'react';
import Footer from './Footer.js';

class ToDoPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {entry: ["item 1", "item 2", "item 3", "item 4"], input: "",};
		this.appendItem = this.appendItem.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.deleteAll = this.deleteAll.bind(this);
	}

	deleteAll() {
		this.setState({entry: []});
	}

	handleChange(e) {
		this.setState({input: e.target.value})
	}

	appendItem(e) {
		e.preventDefault();
		if (!this.state.input) {
			return
		}
		let current = this.state.entry;
		let concat = current.concat(this.state.input);
		this.setState({entry: concat, input: ""});
		
	}


 
	render() {
		return (
			<div id="todoDiv">
				<Input appendItem={this.appendItem} handleChange={this.handleChange} input={this.state.input}/>
				<List entry={this.state.entry}/>
				<Footer deleteAll={this.deleteAll}/>
			</div>
			)
	}
}


class Input extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<form id="todoDivForm"onSubmit={this.props.appendItem}>
				<input autocomplete="off" id="toDoInput" placeholder="type here" type="text" value={this.props.input} onChange={this.props.handleChange} onSubmit={this.props.appendItem}/>
			</form>
			)
	}
}



class List extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<ul>
				{this.props.entry.map((item) => <li key={item}> {item} <span> x </span></li>)}
			</ul>
			)
	}
}

export default ToDoPage;