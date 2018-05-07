import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Slide from 'base/slide/silde'
import LcrList from 'components/lcr-list/lcr-list'
import {getBanner, getPersonalized} from 'api'
import './recommend.scss'

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],//banner数组
      getDate: new Date().getDate(),//当前日期
      personalized: [],//推荐歌单
    }
  }
  
  componentDidMount() {
    getBanner()
    .then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.setState({
          banners: res.data.banners
        });
        this.refs.slide.refresh()
      }
    });
    getPersonalized()
    .then(res => {
      // console.log(res);
      if (res.data.code === 200) {
        this.setState({
          personalized: res.data.result
        })
      }
    });
  }
  
  render() {
    const {personalized,getDate} = this.state;
    return (
      <div className="Recommend">
        {this.state.banners && <div className="banner"><Slide ref="slide" data={this.state.banners}/></div>}
        <div className="menu">
          <div className="menu-item fm">
            <div className="menu-icon"/>
            <p>私人FM</p>
          </div>
          <div className="menu-item daily">
            <div className="menu-icon" data-date={getDate}/>
            <p>每日推荐</p>
          </div>
          <div className="menu-item playlist">
            <div className="menu-icon"/>
            <p>歌单</p>
          </div>
          <Link to="/toplist" className="menu-item rank">
            <div className="menu-icon"/>
            <p>排行榜</p>
          </Link>
        </div>
        <LcrList title="推荐歌单" data={personalized}/>
      </div>
    );
  }
}

export default Recommend;
