import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'

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
      
    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h2>High Scores:</h2>
                <h3>1. CML - 12</h3>
                <h3>2. CML - 13</h3>
                <h3>3. CML - 14</h3>
                <h3>4. CML - 15</h3>
                <h3>5. CML - 16</h3>
            </div>
        )
    }
}