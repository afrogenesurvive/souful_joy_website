import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import TeamPage from './pages/TeamPage';
import PathPage from './pages/PathPage';
import ContactPage from './pages/ContactPage';
import SocialMediaPage from './pages/SocialMediaPage';
import RetreatPage from './pages/RetreatPage';
import ShopPage from './pages/ShopPage';
import ParallaxPage from './pages/ParallaxPage';

import Analytics from 'react-router-ga';

import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
import './App.css';

class App extends Component {
  state = {
    splashPage: true,
    detailViewerOpen: false,
    detailViewerData: null,
    contactForm: false,
  };

  static contextType = AuthContext;

  // constructor(props) {
  //   super(props);
  // }

  // componentDidUpdate() {
  // }
  //
  // componentDidMount() {
  // }
  //
  // componentWillUnmount() {
  // }


  closeSplash = () => {
    this.setState({splashPage: false})
  }

  openDetailViewer = (args) => {
    console.log(args);
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
        <Analytics id="UA-172409870-1">
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

                {
                  // <Route path="/home" render={(props) => <HomePage {...props}
                  // />}/>
                  // <Route path="/team" render={(props) => <TeamPage {...props}
                  //   openDetailViewer={this.openDetailViewer}
                  //   closeDetailViewer={this.closeDetailViewer}
                  //   detailViewerOpen={this.state.detailViewerOpen}
                  //   detailViewerData={this.state.detailViewerData}
                  // />}/>
                  // //
                  // <Route path="/path" render={(props) => <PathPage {...props}
                  //   openDetailViewer={this.openDetailViewer}
                  //   closeDetailViewer={this.closeDetailViewer}
                  //   detailViewerOpen={this.state.detailViewerOpen}
                  //   detailViewerData={this.state.detailViewerData}
                  // />}/>
                  // <Route path="/socialMedia" render={(props) => <SocialMediaPage {...props}
                  //   openDetailViewer={this.openDetailViewer}
                  //   closeDetailViewer={this.closeDetailViewer}
                  //   detailViewerOpen={this.state.detailViewerOpen}
                  //   detailViewerData={this.state.detailViewerData}
                  // />}/>
                  // <Route path="/retreat" render={(props) => <RetreatPage {...props}
                  //   openDetailViewer={this.openDetailViewer}
                  //   closeDetailViewer={this.closeDetailViewer}
                  //   detailViewerOpen={this.state.detailViewerOpen}
                  //   detailViewerData={this.state.detailViewerData}
                  // />}/>
                  // <Route path="/shop" render={(props) => <ShopPage {...props}
                  //
                  // />}/>
                  // <Route path="/parallax" render={(props) => <ParallaxPage {...props}
                  //   scrollPos={this.state.scrollPos}
                  //   mouseWheelDeltaY={this.state.mouseWheelDeltaY}
                  //   overscrollTop={this.state.overscrollTop}
                  //   overscrollDir={this.state.overscrollDir}
                  //   mobile={this.state.mobile}
                  //   viewHeight={this.state.height}
                  //
                  //   openDetailViewer={this.openDetailViewer}
                  //   closeDetailViewer={this.closeDetailViewer}
                  //   detailViewerOpen={this.state.detailViewerOpen}
                  //   detailViewerData={this.state.detailViewerData}
                  // />}/>
                  // <Route path="/contact" render={(props) => <ContactPage {...props}
                  //   openDetailViewer={this.openDetailViewer}
                  //   closeDetailViewer={this.closeDetailViewer}
                  //   detailViewerOpen={this.state.detailViewerOpen}
                  //   detailViewerData={this.state.detailViewerData}
                  // />}/>
                }


                <Redirect from="/" to="/welcome" exact />
                <Redirect from="*" to="/welcome" exact />
                </Switch>
              </main>

            </AuthContext.Provider>
          </React.Fragment>
          </Analytics>
      </BrowserRouter>
    );
  }
}

export default App;
