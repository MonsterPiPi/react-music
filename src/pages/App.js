import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
// import {CSSTransition} from 'react-transition-group'
import asyncComponent from 'common/asyncComponent'

import Drawer from 'base/drawer/drawer'
import MmHeader from 'components/mm-header/mm-header'
import Player from 'components/player/player'

const Discover = asyncComponent(() => import('pages/discover/discover'));
const Video = asyncComponent(() => import('pages/video/video'));
const TopList = asyncComponent(() => import('pages/toplist/toplist'));

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isDrawer: false
    }
  }
  
  componentDidMount() {
    // console.log(this)
  }
  
  openDrawer = (state) => {
    // console.log(state)
    this.setState({
      isDrawer: state
    })
  };
  
  render() {
    return (
      <Router>
        <Drawer className="App mm-music" isDrawer={this.state.isDrawer} onOpen={this.openDrawer}>
          <MmHeader onOpen={this.openDrawer} />
          {/*<CSSTransition timeout={300} classNames="translate">*/}
            <main className="mm-main">
              <Switch>
                <Route path="/discover" component={Discover}/>
                <Route path="/video" component={Video}/>
                <Route path="/toplist" component={TopList}/>
                <Redirect to="/discover"/>
              </Switch>
            </main>
          {/*</CSSTransition>*/}
          <Player/>
        </Drawer>
      </Router>
    )
      ;
  }
}

export default App;
