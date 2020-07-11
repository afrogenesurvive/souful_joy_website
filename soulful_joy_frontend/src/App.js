// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import TeamPage from './pages/TeamPage';
import TeamPage2 from './pages/TeamPage2';
import PathPage from './pages/PathPage';
import PathPage2 from './pages/PathPage2';
import ContactPage2 from './pages/ContactPage2';
import ContactPage from './pages/ContactPage';
import SocialMediaPage2 from './pages/SocialMediaPage2';
import SocialMediaPage from './pages/SocialMediaPage';
import RetreatPage from './pages/RetreatPage';
import RetreatPage2 from './pages/RetreatPage2';
import ShopPage from './pages/ShopPage';
import ParallaxPage from './pages/ParallaxPage';

import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    splashPage: true,
    detailViewerOpen: false,
    detailViewerData: null,
    contactForm: false,
    scrollPos: 0,
    mouseWheelDeltaY: 0,
    overscrollTop: -30,
    overscrollDir: null,
    mobile: false,
    height: "",
    lowerLimit: false,
    currentPage: '',
  };

  static contextType = AuthContext;

  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate() {
    // console.log('bam!! Kick it up a notch....component');
    // let foo = MainNavigation.props;
    // let bar = {...MainNavigation};
    // console.log('1',foo);
    // console.log('2',bar);
    // console.log('3',bar.WrappedComponent);
    // console.log('4',bar.WrappedComponent());
    // console.log('5',bar.propTypes);
    // console.log('a',{...Switch});
    // console.log('b',{...BrowserRouter});
    // prevLocation
    // currentLocation
    // if not equal then reset overscrollTop
  }

  componentDidMount() {
     // window.addEventListener('wheel', this.mousemove);
     // this.setState({height: window.innerHeight});
     // if (window.innerHeight > 780 && window.innerHeight < 960) {
     //   this.setState({
     //     height: 'med',
     //     overscrollTop: -26
     //   })
     // }
     // if (window.innerHeight > 960) {
     //   this.setState({
     //     height: 'tall',
     //     overscrollTop: -30
     //   })
     // }
     // if (window.innerWidth <= 428) {
     //   console.log("beep");
     //   this.setState({
     //     mobile: true,
     //     height: 'mobile',
     //     overscrollTop: -65
     //   })
     // }
  }

  componentWillUnmount() {
    // window.removeEventListener('wheel', this.mousemove)
  }


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

  mousemove = (e) => {
    let overscrollTop = this.state.overscrollTop;
    let overscrollDir = null;
    if ( e.deltaY > 0 ) {
      overscrollDir = 'down'
    }
    if ( e.deltaY < 0 ) {
      overscrollDir = 'up'
    }

    if (
      overscrollDir === 'down' &&
      this.state.height === 'med' &&
      this.state.detailViewerOpen === false
      // && overscrollTop >= -150;
    ) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop-1,
        overscrollDir: overscrollDir
      })
    }
    // this.state.overscrollTop >= this.state.currentLowerLimit
    if (
      overscrollDir === 'down' &&
      this.state.height === 'tall' &&
       this.state.detailViewerOpen === false
       // && overscrollTop >= -150;
     ) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop-1,
        overscrollDir: overscrollDir
      })
    }
    if (
      overscrollDir === 'down' &&
      this.state.mobile === true &&
      this.state.detailViewerOpen === false
      // && overscrollTop >= -150;
    ) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop-1,
        overscrollDir: overscrollDir
      })
    }


    // if (overscrollDir === 'down' && overscrollDir >= this.state.currentLowerLimit) {
    //   this.setState({
    //     mouseWheelDeltaY: e.deltaY,
    //     overscrollTop: overscrollTop-1,
    //     overscrollDir: overscrollDir
    //   })
    // }


    if (overscrollDir === 'up' && this.state.height === 'med' && overscrollTop <= -26 && this.state.detailViewerOpen === false) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop+1,
        overscrollDir: overscrollDir
      })
    }
    if (overscrollDir === 'up' && this.state.height === 'tall' && overscrollTop <= -30 && this.state.detailViewerOpen === false) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop+1,
        overscrollDir: overscrollDir
      })
    }
    if (overscrollDir === 'up' && this.state.mobile === true && overscrollTop <= -65 && this.state.detailViewerOpen === false) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop+1,
        overscrollDir: overscrollDir
      })
    }

  }

  setCurrentPage = (args) => {
    console.log('setCurrentPage', args);
    // this.setState({
    //   currentPage: args
    // })

    // if (args === 'team' && this.state.height === 'tall') {
    //   this.setState({currentLowerLimit: })
    // }
    // if (args === 'team' && this.state.height === 'med') {
    //   this.setState({currentLowerLimit: })
    // }
    // if (args === 'team' && this.state.height === 'mobile') {
    //   this.setState({currentLowerLimit: })
    // }
  }
  resetOverscrollTop = () => {
    console.log('resetOverscrollTop');
    // this.setState({overscrollTop: -30})
    if (this.state.height === 'tall') {
      this.setState({overscrollTop: -30})
    }
    if (this.state.height === 'med') {
      this.setState({overscrollTop: -26})
    }
    if (this.state.height === 'mobile') {
      this.setState({overscrollTop: -65})
    }
  }

// <Route path="/home" component={MainNavigation} />
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
            }}
          >
          {
            // <MainNavigation />
          }
            <main className="main-content">
              <Switch>
              <Route path="/welcome" render={(props) => <WelcomePage {...props}
                closeSplash={this.closeSplash}
              />}/>
              <Route path="/home" render={(props) => <HomePage {...props}
                mobile={this.state.mobile}
              />}/>
              <Route path="/team2" render={(props) => <TeamPage2 {...props}
                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/team" render={(props) => <TeamPage {...props}
                scrollPos={this.state.scrollPos}
                mouseWheelDeltaY={this.state.mouseWheelDeltaY}
                overscrollTop={this.state.overscrollTop}
                resetOverscrollTop={this.resetOverscrollTop}
                setLowerLimit={this.setLowerLimit}
                overscrollDir={this.state.overscrollDir}
                mobile={this.state.mobile}
                viewHeight={this.state.height}
                testFunc={this.testFunc}

                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>

              <Route path="/path2" render={(props) => <PathPage2 {...props}
                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/path" render={(props) => <PathPage {...props}
                scrollPos={this.state.scrollPos}
                mouseWheelDeltaY={this.state.mouseWheelDeltaY}
                overscrollTop={this.state.overscrollTop}
                overscrollDir={this.state.overscrollDir}
                mobile={this.state.mobile}
                viewHeight={this.state.height}

                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/socialMedia2" component={SocialMediaPage2} />
              <Route path="/socialMedia" render={(props) => <SocialMediaPage {...props}
                scrollPos={this.state.scrollPos}
                mouseWheelDeltaY={this.state.mouseWheelDeltaY}
                overscrollTop={this.state.overscrollTop}
                overscrollDir={this.state.overscrollDir}
                mobile={this.state.mobile}
                viewHeight={this.state.height}

                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/retreat2" render={(props) => <RetreatPage2 {...props}
                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/retreat" render={(props) => <RetreatPage {...props}
                scrollPos={this.state.scrollPos}
                mouseWheelDeltaY={this.state.mouseWheelDeltaY}
                overscrollTop={this.state.overscrollTop}
                overscrollDir={this.state.overscrollDir}
                mobile={this.state.mobile}
                viewHeight={this.state.height}
                setCurrentPage={this.setCurrentPage}


                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/shop" render={(props) => <ShopPage {...props}

              />}/>
              <Route path="/parallax" render={(props) => <ParallaxPage {...props}
                scrollPos={this.state.scrollPos}
                mouseWheelDeltaY={this.state.mouseWheelDeltaY}
                overscrollTop={this.state.overscrollTop}
                overscrollDir={this.state.overscrollDir}
                mobile={this.state.mobile}
                viewHeight={this.state.height}

                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/contact2" render={(props) => <ContactPage2 {...props}
                contactForm={this.state.contactForm}
                openContactForm={this.openContactForm}
                cancelContactForm={this.cancelContactForm}
                submitContactForm={this.submitContactForm}
              />}/>
              <Route path="/contact" render={(props) => <ContactPage {...props}
                scrollPos={this.state.scrollPos}
                mouseWheelDeltaY={this.state.mouseWheelDeltaY}
                overscrollTop={this.state.overscrollTop}
                overscrollDir={this.state.overscrollDir}
                mobile={this.state.mobile}
                viewHeight={this.state.height}

                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
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
