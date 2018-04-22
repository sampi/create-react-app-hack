import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// This is just a Thing
class Thing extends Component {
	render() {
		return <div className="thing" />;
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="header">
					<img src={logo} className="logo" alt="logo" />
					<h1 className="title">Welcome to React</h1>
				</header>
				<p className="intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Thing />
			</div>
		);
	}
}

export default App;
