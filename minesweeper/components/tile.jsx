import * as Minesweeper from './minesweeper.js'
import React from 'react';
import Game from './game';

export default class Tile extends React.Component {
    constructor(props){
        super(props)
        this.status = this.status.bind(this);
        this.printTile = this.printTile.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // export class Tile {
    //     constructor(board, pos) {
    //         this.board = board;
    //         this.pos = pos;
    //         this.bombed = false;
    //         this.explored = false;
    //         this.flagged = false;
    //     }

    handleClick(e) {
        // e.preventDefault();
        const currTile = this.props.tile;
        const clicked = e.altKey;
        // debugger;
        console.log(currTile);
        console.log(e.altKey);
        this.props.updateGame(currTile, clicked);
        // if (clicked) {

        // }
        // jsObject is the actual DIV that holds our tile

    }

    printTile() {
        if (this.props.tile.flagged) {
            return "🏴";
        // } else if (this.props.tile.bombed) {
        //     return "💣";
        } else if (this.props.tile.explored) {
            if (this.props.tile.bombed) {
                return "💣"
            }
            let nums = this.props.tile.adjacentBombCount();
            return nums > 0 ? nums : " ";
        } else {
            return " ";
        }
    }


    //     //return what the visual represenation of the tile should be
    // }

    status() {
        if (this.props.tile.flagged) {
            return "flagged";
        // } else if (this.props.tile.bombed) {
        //     return "bombed";
        } else if (this.props.tile.explored) {
            if (this.props.tile.bombed) {
                return "bombed"
            } 
            return "explored";
        } else {
            return "not";
        }
    }

    render() {
        if (this.props.over) {
            return (
                <>
                    <div className={`tile ${this.status()}`}> {this.printTile()} </div>
                </>
            )

        } else {
            return (
                <>
                    <div className={`tile ${this.status()}`} onClick={this.handleClick}> {this.printTile()} </div>
                </>
            )
        }
    }
}