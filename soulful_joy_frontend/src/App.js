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
import ParallaxPage from './pages/ParallaxPage';

// import MainNavigation from './components/Navigation/MainNavigation';
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
    overscrollTop: .5,
    overscrollDir: null,
    mobile: false,
    height: "",
  };

  static contextType = AuthContext;

  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate() {
  }
  componentDidMount() {
    console.log(window.innerHeight);
     window.addEventListener('scroll', this.listenToScroll);
     // window.addEventListener('mousemove', this.mousemove);
     // window.addEventListener('mouseup', this.mousemove);
     // window.addEventListener('mousedown', this.mousemove);
     window.addEventListener('wheel', this.mousemove);

     this.setState({height: window.innerHeight});
     if (window.innerHeight > 780 && window.innerHeight < 960) {
       this.setState({
         height: 'med',
         overscrollTop: -26
       })
     }
     if (window.innerHeight > 960) {
       this.setState({
         height: 'tall',
         overscrollTop: -30
       })
     }
     if (window.innerWidth <= 420) {
       this.setState({
         mobile: true,
         height: 'mobile',
         overscrollTop: -65
       })
     }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }


  closeSplash = () => {
    this.setState({splashPage: false})
  }

  openDetailViewer = (args) => {
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
  listenToScroll = () => {
    // const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // const scrolled = winScroll / height;
    // console.log(`
    //     window.scrollY: ${window.scrollY}
    //     document.body.scrollTop: ${document.body.scrollTop},
    //     document.documentElement.scrollTop: ${document.documentElement.scrollTop},
    //     document.documentElement.scrollHeight: ${document.documentElement.scrollHeight},
    //     document.documentElement.clientHeight: ${document.documentElement.clientHeight}
    //     scrolled: ${scrolled}
    //   `);
    this.setState({scrollPos: window.scrollY});
  }
  mousemove = (e) => {
    // console.log("deltaY",e.deltaY);
    // console.log("clientY",e.clientY);
    // console.log("offsetY",e.offsetY);
    let overscrollTop = this.state.overscrollTop;
    let overscrollDir = null;
    if ( e.deltaY > 0 ) {
      overscrollDir = 'down'
    }
    if ( e.deltaY < 0 ) {
      overscrollDir = 'up'
    }


    if (overscrollDir === 'down' && this.state.height === 'med' && overscrollTop >= -133) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop-1,
        overscrollDir: overscrollDir
      })
    }
    if (overscrollDir === 'down' && this.state.height === 'tall' && overscrollTop >= -162) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop-1,
        overscrollDir: overscrollDir
      })
    }
    if (overscrollDir === 'down' && this.state.mobile === true && overscrollTop >= -340) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop-1,
        overscrollDir: overscrollDir
      })
    }


    if (overscrollDir === 'up' && this.state.height === 'med' && overscrollTop <= -26) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop+1,
        overscrollDir: overscrollDir
      })
    }
    if (overscrollDir === 'up' && this.state.height === 'tall' && overscrollTop <= -30) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop+1,
        overscrollDir: overscrollDir
      })
    }
    if (overscrollDir === 'up' && this.state.mobile === true && overscrollTop <= -65) {
      this.setState({
        mouseWheelDeltaY: e.deltaY,
        overscrollTop: overscrollTop+1,
        overscrollDir: overscrollDir
      })
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
              <Route path="/home" component={HomePage} />
              <Route path="/team" render={(props) => <TeamPage {...props}
                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/path" render={(props) => <PathPage {...props}
                openDetailViewer={this.openDetailViewer}
                closeDetailViewer={this.closeDetailViewer}
                detailViewerOpen={this.state.detailViewerOpen}
                detailViewerData={this.state.detailViewerData}
              />}/>
              <Route path="/socialMedia" component={SocialMediaPage} />
              <Route path="/retreat" render={(props) => <RetreatPage {...props}
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
