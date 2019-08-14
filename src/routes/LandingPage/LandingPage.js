import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './LandingPage.css'

export default class LandingPage extends Component{
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

      goToGame = () => {
        const {history} = this.props
        history.push('/game')
      }
      render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h2 className="pageHeader">Match Maker</h2>
                <header>
                    <h3>Test your memory!</h3>
                </header>
                <p>Make matches by flipping two cards at a time. If they match, they stay flipped. If not, they flip back over and you try again.</p>
                <section>
                    <header>
                        <h3>Start Playing Now</h3>
                    </header> 
                    <form>
                        <button type="submit" onClick={this.goToGame}>Start Game</button>
                    </form>
                </section>
            </div>
        )
    }
    }