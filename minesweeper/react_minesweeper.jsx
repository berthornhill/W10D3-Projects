import React from 'react'
import ReactDOM from 'react-dom'
import Minesweeper from './components/minesweeper';
import Game from './components/game.jsx';


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById('main'));
})

class Root extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Game/ >
            </div>
        )
    }
}