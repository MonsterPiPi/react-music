import React, {Component} from 'react'
import Loading from 'base/loading/loading'
import './toplist.scss'

class TopList extends Component {
  render(){
    return(
      <div className="toplist">
        排行榜
        <Loading/>
      </div>
    )
  }
}

export default TopList
