import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ScoreItem from '../../components/ScoreItem/ScoreItem'
import GameContext from '../../contexts/game-context'
import ScoresApiService from '../../services/scores-api-service'
import './HighScores.css'

export default class ScoresPage extends Component{
    _isMounted = false
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
        this._isMounted = true
        ScoresApiService.getScores()
            .then(res => {
                let scores = res;
                this.setState({ scores })
            })
            .catch(this.state.error)
    }

    componentWillUnmount(){
        this._isMounted = false
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
        if(this._isMounted){
            ScoresApiService.getScores()
            .then(res => {
                let scores = res;
                this.setState({ scores })
            })
            .catch(this.state.error)
        }
    }

    renderForm = () => {
        if(this.context.score !== 0){
            return(
                <form onSubmit={this.handleClick}>
                    <label htmlFor="initials">Enter your initials: </label>
                    <input name="initials" required></input>
                    <h3>Your Score: </h3>
                    <h3>{this.context.score}</h3>
                    <button type="submit">Add your score</button>
                </form>
            )
        }
    }
      
    render(){
        return(
            <div className="score">
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h2>Scores:</h2>
                <div>{this.renderForm()}</div>
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