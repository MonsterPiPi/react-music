import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {CSSTransition} from 'react-transition-group'
import Cd from './cd/cd'
import './player.scss'

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false
    }
  }
  
  componentDidMount() {
    this.mmPlayer = ReactDOM.findDOMNode(this.refs.mmPlayer);
  }
  
  render() {
    const {isFull} = this.state;
    return (
      <div className="play">
        <CSSTransition in={isFull} timeout={300} classNames="play-full"
           onEnter={() => {
             this.mmPlayer.style.display = 'block';
           }}
           onExited={() => {
             this.mmPlayer.style.display = 'none';
           }}>
          <div ref="mmPlayer" className="play-full">
            <div className="play-bg">
              <img src="http://p1.music.126.net/LQ2iUKlZwqGMysGkeCR4ww==/27487790697969.jpg" alt="" width="100%" height="100%"/>
            </div>
            <div className="header">
            <span className="header-back" onClick={() => {
              this.setState({isFull: false})
            }}/>
              <h1>明天你好</h1>
              <h2>牛奶咖啡</h2>
            </div>
            <div className="middle">
              <Cd/>
            </div>
            <div className="footer">
            
            </div>
          </div>
        </CSSTransition>
        <div className="play-min" onClick={() => {
          this.setState({isFull: true})
        }} style={{display: !isFull ? 'block' : 'none'}}>
          我是播放器组件（等待制作中）
        </div>
        <audio ref="audio" src="https://music.163.com/song/media/outer/url?id=33756016.mp3" preload="auto" autoPlay
               loop>
          您的浏览器不支持 audio 元素。
        </audio>
      </div>
    )
  }
}

export default Player
