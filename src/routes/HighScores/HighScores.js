import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ScoreItem from '../../components/ScoreItem/ScoreItem'
import GameContext from '../../contexts/game-context'
import ScoresApiService from '../../services/scores-api-service'
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
            }
        ],
        scores: [
            {
                initials: '',
                score: 0,
            }
        ],
        error: null
    }

    componentDidMount(){
        ScoresApiService.getScores()
            .then(res => {
                let scores = res;
                this.setState({ scores })
            })
            .catch(this.state.error)
    }
static contextType = GameContext;

    handleClick = ev => {
        ev.preventDefault()
        const { initials } = ev.target
        let newScore = {
            initials:initials.value,
            score: this.context.score
        }
        ScoresApiService.postScore( newScore.initials, newScore.score )

    }
    
    componentDidUpdate(){
        ScoresApiService.getScores()
        .then(res => {
            let scores = res;
            this.setState({ scores })
        })
        .catch(this.state.error)
    }
      
    render(){
        return(
            <div className="score">
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h2>Scores:</h2>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="initials">Enter your initials: </label>
                    <input name="initials" required></input>
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
                                     name={this.state.scores[key].initials}
                                     num={this.state.scores[key].score}
                                    > 
                                </ScoreItem>
                            )
                        })}
                </div>
            </div>
        )
    }
}