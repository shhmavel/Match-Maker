import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ScoreItem from '../../components/ScoreItem/ScoreItem'
import GameContext from '../../contexts/game-context'
import './HighScores.css'

export default class ScoresPage extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }

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
        ],
        scores: [
            {
                name: 'CML',
                num: 12,
            },
            {
                name: 'AFL',
                num: 13,
            },
            {
                name: 'LBD',
                num: 14,
            },
        ]
    }

static contextType = GameContext;

    handleClick = ev => {
        console.log("clicky clacky")
        ev.preventDefault()
        const { initials } = ev.target
        let scores = this.state.scores
        let newScore = {
            name:initials.value,
            num: this.context.score
        }
        scores.push(newScore)
        this.setState({ scores })

    }
      
    render(){
        console.log('score ', this.state.scores)
        return(
            <div className="score">
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h2>Scores:</h2>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="initials">Enter your initials: </label>
                    <input name="initials"></input>
                    <h3>Your Score: </h3>
                    <h3>{this.context.score}</h3>
                    <button type="submit">Add your score</button>
                </form>
                <div>
                    {Object.keys(this.state.scores)
                        .map(key => {
                            return (
                                <ScoreItem
                                     key={key}
                                     id={key}
                                     name={this.state.scores[key].name}
                                     num={this.state.scores[key].num}
                                    > 
                                </ScoreItem>
                            )
                        })}
                </div>
            </div>
        )
    }
}