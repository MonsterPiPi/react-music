import React, {Component} from 'react'
import {Route, Switch, Redirect, NavLink, withRouter} from "react-router-dom"
import './discover.scss'
import Recommend from 'pages/discover/recommend/recommend'
// import Find from 'pages/discover/find/find'
import My from 'pages/discover/my/my'

class Discover extends Component {
  componentDidMount() {
    // console.log(this)
  }
  render() {
    return (
      <div className="discover mm-music">
        <div className="header">
          <NavLink className="header-item" to={{pathname: '/discover/recommend', state: {showHeader: true}}}>推荐</NavLink>
          {/*<NavLink className="header-item" to="/discover/my">我的</NavLink>*/}
          {/*<NavLink className="tab-item" to="/find">发现</NavLink>*/}
        </div>
        <main className="mm-main">
          <Switch>
            <Route path="/discover/recommend" component={Recommend}/>
            <Route path="/discover/my" component={My}/>
            {/*<Route path="/discover/find" component={Find}/>*/}
            <Redirect to={{pathname: '/discover/recommend', state: {showHeader: true}}}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(Discover)
