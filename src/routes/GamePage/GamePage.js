import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import GameBoard from '../../components/GameBoard/GameBoard'
import GameContext from '../../contexts/game-context'

export default class GamePage extends Component{
    state = { 
        navLinks: [
            {
                link:"Home", 
                route:"/"
            },
            {
                link:"Game",
                route:"/game"
            }
        ]
    }
    static defaultProps = {
        history: {
          push: () => {},
        },
      }

    static contextType = GameContext;

    goToScores = () => {
    const {history} = this.props
    history.push('/scores')
    }

    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h2>Score: { this.context.score }</h2>
                <button onClick={ this.context.setRestart }>Restart</button>
                <button  type="submit" onClick={this.goToScores}>High Scores</button>
                <GameBoard></GameBoard>
            </div>
        )
    }
}