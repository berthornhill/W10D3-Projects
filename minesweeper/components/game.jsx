// import Board from './minesweeper.js';
import * as Minesweeper from './minesweeper.js'
import React from 'react';
import GameBoard from './game_board.jsx';

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: new Minesweeper.Board(10, 1),
            level: 1
        }
        this.updateGame = this.updateGame.bind(this);

        this.restartGameWon = this.restartGameWon.bind(this);
        this.restartGameLost = this.restartGameLost.bind(this);
    }

    restartGameLost() {
        let newLevel = 1;
        this.setState({board: new Minesweeper.Board(10, newLevel), level: newLevel})
    }

    restartGameWon() {
        let newLevel = this.state.level + 1;
        this.setState({board: new Minesweeper.Board(10, newLevel), level: newLevel})
    }

    updateGame(tile, flagged) {
        //updates game board
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({board: this.state.board})

    }

    render() {
        // debugger
        let status = "playing"
        if (this.state.board.lost()) {
            status = "lost"
        } else if (this.state.board.won()) {
            status = "won"
        }

        if (status === "playing") {
            return (
            
                <>
                    <h1>Board Level: {this.state.level}</h1>
                    <GameBoard board={this.state.board} updateGame={this.updateGame} over={false}/>
                    
                </>
            )
        } else if (status === "lost") {
            return (
                <>
                   
                    <GameBoard board={this.state.board} updateGame={this.updateGame} over={true}/>
                    <div className="modal">
                        <div className='modal-screen'></div>
                        <div className='modal-form'>
                            <h1>You Lost at level {this.state.level}</h1>
                            <button onClick={this.restartGameLost}>Play Again</button>
                        </div>
                    </div>
                </>
                
            )
        } else {
            return (
                <>
        
                    <GameBoard board={this.state.board} updateGame={this.updateGame} over={true}/>
                    <div className="modal">
                        <div className='modal-screen'></div>
                        <div className='modal-form'>
                            <h1>YOU WIN</h1>
                            <button onClick={this.restartGameWon}>Play Next Level: {this.state.level + 1}</button>
                        </div>
                    </div>
                </>
            )
        }
    }
}
