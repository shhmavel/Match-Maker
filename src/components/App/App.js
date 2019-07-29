import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import LandingPage from '../../routes/LandingPage/LandingPage'

class App extends Component {
  state = { 
          }

  render(){

    return (
      <main className='App'>
        <Switch>
          <Route
            exact path={'/'}
            component={LandingPage}
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

