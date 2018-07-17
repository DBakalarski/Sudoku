import React from 'react';
import { hot } from 'react-hot-loader';


class App extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Hello world</h1>
			</div>
		);
	}
}

export default hot(module)(App);
