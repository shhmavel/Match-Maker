import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import GameBoard from '../../components/GameBoard/GameBoard'

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

    goToScores = () => {
    const {history} = this.props
    history.push('/scores')
    }

    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h2>Score: 3</h2>
                <button>Restart</button>
                <button  type="submit" onClick={this.goToScores}>High Scores</button>
                <GameBoard></GameBoard>
            </div>
        )
    }
}