import React, { Component } from 'react'
import Card from '../Card/Card'
import { withRouter } from 'react-router-dom'
import './GameBoard.css'
import GameContext from '../../contexts/game-context'

class GameBoard extends Component{
    static defaultProps = {
        history: {
            push: () => {},
          },
        background: "./cardBack.jpg" 
    }

    state = { 
        image: "./cardBack.jpg",
        numFlip: 0,
        currSet: [],
        score: 0,
        cards: [
            {
                flipped: false,
                image: "./LoGrins.jpeg",
                matched: false
            },
            {
                flipped: false,
                image: "./WTH.jpeg",
                matched: false
            },
            {
                flipped: false,
                image: "./Antelope.jpeg",
                matched: false
            },
            {
                flipped: false,
                image: "./trees.jpg",
                matched: false
            },
            {
                flipped: false,
                image: "./trees.jpg",
                matched: false
            },
            {
                flipped: false,
                image: "./Cap.jpg",
                matched: false
            },
            {
                flipped: false,
                image: "./Utah.jpg",
                matched: false
            },
            {
                flipped: false,
                image: "./WTH.jpeg",
                matched: false
            },
            {
                flipped: false,
                image: "./LoGrins.jpeg",
                matched: false
            },
            {
                flipped: false,
                image: "./Utah.jpg",
                matched: false
            },
            {
                flipped: false,
                image: "./Antelope.jpeg",
                matched: false
            },
            {
                flipped: false,
                image: "./Cap.jpg",
                matched: false
            },
        ]
    }

    static contextType = GameContext;

    updateScore = () => {
        this.context.setScore(this.context.score + 1)
    }

    handleClick = async(e) => {
        let cards = this.state.cards
        let numFlip = this.state.numFlip
        let currSet = this.state.currSet
        if(!cards[e.target.id].flipped){
            cards[e.target.id].flipped = !cards[e.target.id].flipped
            this.updateScore()
            if(cards[e.target.id].flipped){
                numFlip = numFlip + 1 
                currSet[currSet.length] = e.target.id
            }
            await this.setState({ cards, currSet, numFlip })
            if(numFlip === 2){
                if(cards[currSet[0]].image === cards[currSet[1]].image){
                    cards[currSet[0]].matched = true 
                    cards[currSet[1]].matched = true 
                    currSet = []
                    numFlip = 0
                    await this.setState({ cards, currSet, numFlip })
                } else {
                    setTimeout(this.resetBoard, 500)
                }
            }
        }
        if(this.gameComplete()){
            const {history} = this.props
            history.push('/scores')
        }
        
    }

    gameComplete = () => {
        for(let i = 0; i < this.state.cards.length; i++){
            if(!this.state.cards[i].matched){
                return false; 
            }
        }
        return true;
    }

    resetBoard = () => {
        let cards = this.state.cards
        let numFlip = this.state.numFlip
        let currSet = this.state.currSet
        cards[currSet[0]].flipped = false
        cards[currSet[1]].flipped = false
        currSet = []
        numFlip = 0
        
        this.setState({ cards, currSet, numFlip })
    }

    clearBoard = () => {
        let cards = this.state.cards
        let currSet = []
        let numFlip = 0
        for(let i = 0; i < this.state.cards.length; i++){
            cards[i].flipped = false
        }
        this.context.setRestart(false)
        this.setState({ cards, numFlip, currSet })
    }

    render(){
        if(this.context.restart){
            this.clearBoard()
        }
        return(
            <section className = "game-board">
                <div className = "game-row">
                    <Card 
                        id = "0" 
                        onClick = { this.handleClick }
                        image = {this.state.cards[0].flipped ? this.state.cards[0].image : this.props.background}>
                    </Card>
                    <Card 
                        id="1" 
                        onClick = { this.handleClick }
                        image={this.state.cards[1].flipped ? this.state.cards[1].image : this.props.background}>
                    </Card>
                    <Card
                        id="2"
                        onClick = { this.handleClick } 
                        image={this.state.cards[2].flipped ? this.state.cards[2].image : this.props.background}>
                    </Card>
                    <Card 
                        id="3"
                        onClick = { this.handleClick } 
                        image={this.state.cards[3].flipped ? this.state.cards[3].image : this.props.background}></Card>
                </div>
                <div className="game-row">
                    <Card 
                        id="4" 
                        onClick = { this.handleClick }
                        image={this.state.cards[4].flipped ? this.state.cards[4].image : this.props.background}></Card>
                    <Card 
                        id="5" 
                        onClick = { this.handleClick }
                        image={this.state.cards[5].flipped ? this.state.cards[5].image : this.props.background}></Card>
                    <Card 
                        id="6"
                        onClick = { this.handleClick } 
                        image={this.state.cards[6].flipped ? this.state.cards[6].image : this.props.background}></Card>
                    <Card 
                        id="7"
                        onClick = { this.handleClick } 
                        image={this.state.cards[7].flipped ? this.state.cards[7].image : this.props.background}></Card>
                </div>
                <div className="game-row">
                    <Card 
                        id="8"
                        onClick = { this.handleClick } 
                        image={this.state.cards[8].flipped ? this.state.cards[8].image : this.props.background}></Card>
                    <Card 
                        id="9" 
                        onClick = { this.handleClick }
                        image={this.state.cards[9].flipped ? this.state.cards[9].image : this.props.background}></Card>
                    <Card 
                        id="10" 
                        onClick = { this.handleClick }
                        image={this.state.cards[10].flipped ? this.state.cards[10].image : this.props.background}></Card>
                    <Card 
                        id="11"
                        onClick = { this.handleClick } 
                        image={this.state.cards[11].flipped ? this.state.cards[11].image : this.props.background}></Card>
                </div>
            </section>
        )
    }
}
export default withRouter(GameBoard)