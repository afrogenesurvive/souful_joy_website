// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import TeamPage from './pages/TeamPage';
import PathPage from './pages/PathPage';
import ContactPage from './pages/ContactPage';
import SocialMediaPage from './pages/SocialMediaPage';
import RetreatPage from './pages/RetreatPage';
import ShopPage from './pages/ShopPage';

import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    splashPage: true,
    detailViewerOpen: false,
    detailViewerData: null,
    contactForm: false,
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

  openDetailViwer = (args) => {
    this.setState({
      detailViewerOpen: true,
      detailViewerData: args
    })
  }
  closeDetailViewer = () => {
    this.setState({
      detailViewerOpen: false,
      detailViewerData: null
    })
  }
  openContactForm = () => {

    this.setState({contactForm: true})
  }
  submitContactForm = () => {

    this.setState({contactForm: false})
  }
  cancelContactForm = () => {
    this.setState({contactForm: false})
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
              <Route path="/team" render={(props) => <TeamPage {...props}
                openDetailViwer={this.openDetailViwer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/path" render={(props) => <PathPage {...props}
                openDetailViwer={this.openDetailViwer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/socialMedia" component={SocialMediaPage} />
              <Route path="/retreat" render={(props) => <RetreatPage {...props}
                openDetailViwer={this.openDetailViwer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/shop" component={ShopPage} />
              <Route path="/contact" render={(props) => <ContactPage {...props}
                contactForm={this.state.contactForm}
                openContactForm={this.openContactForm}
                cancelContactForm={this.cancelContactForm}
                submitContactForm={this.submitContactForm}
              />}/>
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
