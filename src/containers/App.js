import React from 'react';
import { hot } from 'react-hot-loader';
import sudoku from 'sudoku-umd';

import styles from './App.css';

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			board: '',
			initialBoard: ''
		}

	}

	randBoard(level) {
		let randomBoard = sudoku.generate(level)
	    this.setState({
	     	board: randomBoard,
			initialBoard: randomBoard
			})
	}

	updateNumber(e, index) {
		let tempBoard = this.state.board.split("").map((item, i) => {
			if(i == index) return e.target.value;
			else return item;
		});
		this.setState({ board: tempBoard.join("") })
	}
	solve(elem) {
		let sudokuSolve = sudoku.solve(elem)
		this.setState({
			board: sudokuSolve
			//initialBoard: sudokuSolve
		})
	}

	render() {
		return (
			<div>
				<h1>Sudoku APP</h1>

				<div className={"WelcomeHeader"}>
           <h2>Witamy w grze</h2>
					 <button onClick={ () => this.randBoard("easy") }>Easy</button>
					 <button onClick={ () => this.randBoard("medium") }>Medium</button>
					 <button onClick={ () => this.randBoard("hard") }>Hard</button>
					 <button onClick={ () => this.solve(randomBoard) }>Solve</button>
				</div>

        <div className={"Board"}>
          { this.state.board.split("").map((item, index) => {

						if(this.state.initialBoard.split("")[index] != ".") return <input key={index} disabled value={item} />
						else return <input key={index} onChange={(e) => this.updateNumber(e, index)} maxlength="1" /*type="number"*/ value={item} />
					})
				}
				</div>



			</div>
		);
	}
}

export default hot(module)(App);