import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import GamePage from '../../routes/GamePage/GamePage'
import UploadPage from '../../routes/UploadPage/UploadPage'
import HighScores from '../../routes/HighScores/HighScores'

class App extends Component {

  render(){

    return (
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
    );
  }
  }


export default App;

