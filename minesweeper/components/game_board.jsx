import * as Minesweeper from './minesweeper.js'
import React from 'react';
import Game from './game';
import Tile from './tile';

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        
        const rows = this.props.board.grid.map((row, i) => {
            
            // create ul based on the row
            let cols = row.map((el, j) => {
                
                
                return (
                    <li key={j}><Tile tile={el} updateGame={this.props.updateGame} over={this.props.over}/></li>
                )
            })
            
            // when we get here, cols has 10 react tiles with proper indexes 
            // <GameBoard board={this.state.board} updateGame={this.updateGame} />
            
            return (
                <ul key={i}>{cols}</ul>
            )

        })

        // I think we want rows to be 10x10 full of React Tile Component

        return (
        <>
            
            <h1>{rows}</h1>
        </>
       )
    }
}
