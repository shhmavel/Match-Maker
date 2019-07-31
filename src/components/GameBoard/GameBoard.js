import React, { Component } from 'react'
import Card from '../Card/Card'
import './GameBoard.css'

export default class GamePage extends Component{
    render(){
        return(
            <section className="game-board">
                <div class="game-row">
                    <Card id="Card1"></Card>
                    <Card id="Card2"></Card>
                    <Card id="Card3"></Card>
                    <Card id="Card4"></Card>
                </div>
                <div class="game-row">
                    <Card id="Card5"></Card>
                    <Card id="Card6"></Card>
                    <Card id="Card7"></Card>
                    <Card id="Card8"></Card>
                </div>
                <div class="game-row">
                    <Card id="Card9"></Card>
                    <Card id="Card10"></Card>
                    <Card id="Card11"></Card>
                    <Card id="Card12"></Card>
                </div>
            </section>
        )
    }
}