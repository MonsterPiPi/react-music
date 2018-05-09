import React, {Component} from 'react'
import './video.scss';
import Loading from 'base/loading/loading'

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <div className="video">
        视频
        <Loading text="功能开发中..."/>
      </div>
    );
  }
}

export default Video;
