// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import CompanyPage from './pages/CompanyPage';
import GeneralPage from './pages/GeneralPage';
import ContactPage from './pages/ContactPage';
import SocialMediaPage from './pages/SocialMediaPage';
import FeaturedEventPage from './pages/FeaturedEventPage';

import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    splashPage: true,
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
  }



  componentDidMount() {

  }

  componentWillUnmount() {

  }

  closeSplash = () => {
    this.setState({splashPage: false})
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
            }}
          >

            <main className="main-content">
              <Switch>
              <Route path="/welcome" render={(props) => <WelcomePage {...props}
                closeSplash={this.closeSplash}
              />}/>
              <Route path="/home" component={HomePage} />
              <Route path="/company" component={CompanyPage} />
              <Route path="/general" component={GeneralPage} />
              <Route path="/socialMedia" component={SocialMediaPage} />
              <Route path="/featuredEvent" component={FeaturedEventPage} />
              <Route path="/contact" component={ContactPage} />
              <Redirect from="/" to="/welcome" exact />
              <Redirect from="*" to="/welcome" exact />
              </Switch>
            </main>

          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
