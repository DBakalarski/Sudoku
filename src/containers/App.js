import React from 'react';
import { hot } from 'react-hot-loader';


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			initialBoard: '',
			board: ''
}
	}

	render() {
		return (
			<div className="App">
			   <h1>Sudoku</h1>
			  {/* <Board /> */}
			   <div className="buttons">
			       <button>Check</button>
			       <button>New Game</button>
			       <button>Solve</button>
			       <button>Restart</button>
			   </div>
			</div>
		);
	}
}

export default hot(module)(App);
