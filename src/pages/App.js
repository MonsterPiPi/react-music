import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {CSSTransition} from 'react-transition-group'
import MmHeader from 'components/mm-header/mm-header'
import Player from 'components/player/player'
import Discover from 'pages/discover/discover'
import Video from 'pages/video/video'

import TopList from 'pages/toplist/toplist'

class App extends Component {
  
  componentDidMount() {
    console.log(this)
  }
  
  render() {
    return (
      <Router>
        <div className="App mm-music">
          <MmHeader/>
          <CSSTransition timeout={300} classNames="translate">
          <main className="mm-main">
            <Switch>
              <Route path="/discover" component={Discover}/>
              <Route path="/video" component={Video}/>
              <Route path="/toplist" component={TopList}/>
              <Redirect to="/discover"/>
            </Switch>
          </main>
          </CSSTransition>
          <Player/>
        </div>
      </Router>
    );
  }
}

export default App;
