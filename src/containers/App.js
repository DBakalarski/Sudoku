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
		//console.log('e.target value: ' + e.target.value);
		//console.log('item: ' + item);
		this.setState({ board: tempBoard.join("") })
	}
	restart() {
		let restartBoard = this.state.initialBoard
		this.setState({
			board: restartBoard
		})
	}
	check() {
		let sudokuSolve = sudoku.solve(this.state.board)
		if (this.state.board == sudokuSolve)
			console.log('Wygrana')
		else
			console.log('Przegrana')
	}
	solve() {
		let sudokuSolve = sudoku.solve(this.state.board)
		this.setState({
			board: sudokuSolve
			//initialBoard: sudokuSolve
		})
	}

	render() {
		return (
			<div>
				<h1>Sudoku APP</h1>

				<div className={styles.WelcomeHeader}>
           			<h2>Witamy w grze</h2>
					 <button className={styles.Easy} onClick={ () => this.randBoard("easy") }>Easy</button>
					 <button className={styles.Medium} onClick={ () => this.randBoard("medium") }>Medium</button>
					 <button className={styles.Hard} onClick={ () => this.randBoard("hard") }>Hard</button>
				</div>

        <div className={styles.Board}>
          { this.state.board.split("").map((item, index) => {

						if(this.state.initialBoard.split("")[index] != ".") return <input key={index} disabled value={item} />
						else return <input key={index} onChange={(e) => this.updateNumber(e, index)} maxLength="1" /*type="number"*/ value={item}  />
					})
				}
				</div>
		<div className={styles.ButtonBottom}>
					 <button className={styles.Restart} onClick={ () => this.restart() }>Restart</button>
					 <button className={styles.Check} onClick={ () => this.check() }>Check</button>
					 <button className={styles.Solve} onClick={ () => this.solve() }>Solve</button>
		</div>


			</div>
		);
	}
}

export default hot(module)(App);