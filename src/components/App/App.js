import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import GamePage from '../../routes/GamePage/GamePage'
import UploadPage from '../../routes/UploadPage/UploadPage'
import HighScores from '../../routes/HighScores/HighScores'
import GameContext from '../../contexts/game-context';

class App extends Component {
  state = {
    score: 0,
  }

  updateScore = (score) => {
    this.setState({ score })
  }

  render(){
    const contextValue = {
      score: this.state.score,
      setScore: this.updateScore,
    }

    return (
      <GameContext.Provider value={contextValue}>
        <main className='App'>
          <Switch>
            <Route
              exact path={'/'}
              component={LandingPage}
            />
            <Route
              path={'/upload'}
              component={UploadPage}
            />
            <Route
              path={'/game'}
              component={GamePage}
            />
            <Route
              path={'/scores'}
              component={HighScores}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </GameContext.Provider>
    );
  }
  }


export default App;

