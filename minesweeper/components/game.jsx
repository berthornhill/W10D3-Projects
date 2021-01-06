// import Board from './minesweeper.js';
import * as Minesweeper from './minesweeper.js'
import React from 'react';
import GameBoard from './game_board.jsx';

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: new Minesweeper.Board(10, 4)
        }
        const updateGame = this.updateGame.bind(this);
    }

    updateGame() {
        //updates game board
    }

    render() {
        // debugger
        return (
            <div>
                <h1>Board</h1>
                <GameBoard board={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }
}
