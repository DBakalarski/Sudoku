import React from 'react';
import { hot } from 'react-hot-loader';
import sudoku from 'sudoku-umd';

import styles from './App.css';

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			board: '',
			initialBoard: '',
			buttonsVisible: false
			//newGameButtonVisible: true
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
		if (e.target.value > 0 && e.target.value <= 9 && isNaN(e.target.value) === false) {
			let tempBoard = this.state.board.toString().split("").map((item, i) => {
				if(i == index) return e.target.value;
				else return item;

			});
			
			this.setState({ board: tempBoard.join("") })
		} else {
			return false;
		}
	}
	operation() {
	  this.setState({
	    showMe:!this.state.showMe
	  })
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
			alert('Win!')
		else
			alert('Try again!')
	}
	solve() {
		let sudokuSolve = sudoku.solve(this.state.initialBoard)
		this.setState({
			board: sudokuSolve
		})
	}

	render() {
		return (
			<div>
				<h1>Sudoku APP</h1>
				<button className={styles.NewGame} style={{ display: (this.state.buttonsVisible) ? 'none' : 'flex' }} onClick={ () => this.setState({ buttonsVisible:true }) }>New Game</button>
				
				<div className={styles.WelcomeHeader} style={{ display: (this.state.buttonsVisible) ? 'flex' : 'none' }} >
					 <button className={styles.Easy} onClick={ () => this.randBoard("easy") }>Easy</button>
					 <button className={styles.Medium} onClick={ () => this.randBoard("medium") }>Medium</button>
					 <button className={styles.Hard} onClick={ () => this.randBoard("hard") }>Hard</button>
				</div>

        		<div className={styles.Board}>
          			{ this.state.board.toString().split("").map((item, index) => {

						if(this.state.initialBoard.split("")[index] != ".") return <input key={index} disabled value={item} />
						else return <input key={index} onChange={(e) => this.updateNumber(e, index)} type="number" value={item}  />
					})
					}
				</div>
 
				<div className={styles.ButtonBottom} style={{ display: (this.state.buttonsVisible) ? 'flex' : 'none' }}>
					 <button className={styles.Restart} onClick={ () => this.restart() }>Restart</button>
					 <button className={styles.Check} onClick={ () => this.check() }>Check</button>
					 <button className={styles.Solve} onClick={ () => this.solve() }>Solve</button>
				</div>


			</div>
		);
	}
}

export default hot(module)(App);