import React, { Component } from 'react';
import ToDo from './components/ToDoApp.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
		<div className="app">
			<ToDo/>
		</div>
      );
  };
}

export default App;
