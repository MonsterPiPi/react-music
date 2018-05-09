import React, {Component} from 'react';
import {getUserPlaylist} from 'api'
// import Cell from './cell/cell'
import Loading from 'base/loading/loading'

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userList: []
    }
  }
  
  componentWillMount() {
    // console.log('Component WILL MOUNT!组件将挂载')
  }
  
  componentDidMount() {
    getUserPlaylist()
    .then(res => {
      if (res.data.code === 200) {
        this.setState({
          userList: res.data.playlist
        })
      }
    })
  }
  
  componentWillReceiveProps(newProps) {
    console.log(newProps)
    // console.log('componentWillReceiveProps组件将接收道具!', newProps)
  }
  
  shouldComponentUpdate(newProps, newState) {
    // console.log("newProps", newProps)
    // console.log("newState", newState)
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    // console.log('componentWillUpdate!组件将更新')
  }
  
  componentDidUpdate(prevProps, prevState) {
    // console.log('Component DID UPDATE!组件更新')
  }
  
  componentWillUnmount() {
    // console.log('Component WILL UNMOUNT组件将卸载!')
  }
  
  render() {
    // const {userList} = this.state;
    return (
      <div className="music">
        我的音乐
        <Loading text="功能开发中..."/>
        {/*{*/}
          {/*userList.length > 0 && userList.map((item) => {*/}
            {/*return (*/}
              {/*<li className="lcrlist-item" key={item.id}>*/}
                {/*<div className="item-img">*/}
                  {/*<img src={`${item.coverImgUrl}?param=200y200`} alt=""/>*/}
                {/*</div>*/}
                {/*<p className="item-title">{item.name.replace(/\s/g, ' ')}</p>*/}
                {/*<span className="item-play">{item.playCount}</span>*/}
              {/*</li>*/}
            {/*)*/}
          {/*})*/}
        {/*}*/}
      </div>
    )
  }
}

export default Music;
