// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    test: 'test'
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
  }



  componentDidMount() {

  }

  componentWillUnmount() {

  }



  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
            }}
          >
            <MainNavigation
            />

            <main className="main-content">
              <Switch>
              <Route path="/home" component={HomePage} />)
              <Redirect from="/" to="/home" exact />)
              </Switch>
            </main>

          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
